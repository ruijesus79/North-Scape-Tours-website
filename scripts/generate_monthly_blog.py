#!/usr/bin/env python3
"""
NORTHÉ Private Tours - Automated Monthly Editorial Blog Generator
Uses Gemini API to generate luxury seasonal wine tourism articles in 5 languages
(PT, EN, ES, FR, DE) and injects them directly into src/content.ts.
"""

import os
import sys
import json
import re
import urllib.request
import urllib.error
from datetime import datetime

SEASONAL_CALENDAR = {
    1: "Inverno sereno no Douro: Provas de Portos Vintage junto a lareira e o silencio majestoso do rio.",
    2: "Amendoeiras em flor no Douro Superior: O espetaculo branco e rosa que anuncia a primavera.",
    3: "O despertar das vinhas: A poda de precisao e a preparacao dos solos de xisto no Vale do Douro.",
    4: "Primavera no Minho e Douro: Os primeiros rebentos e a frescura inconfundivel do Vinho Verde Alvarinho.",
    5: "Alta temporada de enoturismo: Roteiros privados entre socalcos em flor e cruzeiros ao por do sol.",
    6: "Santos Populares e Solsticio de Verao: O Sao Joao no Porto e as noites quentes nas quintas do Douro.",
    7: "Verao de autor: Festivais vinicos, gastronomia de chef e cruzeiros em barco rabelo privado.",
    8: "O Pintor das uvas e a antecipacao da vindima: Os bagos ganham cor nas encostas durienses.",
    9: "O auge das vindimas: A tradicao secular da pisa a pe nos lagares de granito e os aromas do mosto.",
    10: "O Douro de Ouro: As folhas tingem-se de cobre e os socalcos transformam-se numa pintura viva.",
    11: "Magusto e Sao Martinho: Castanhas assadas, vinhos novos e a tranquilidade outonal do vale.",
    12: "Luzes de Natal e celebracoes de fim de ano: A exclusividade de viver o reveillon no Douro Vinhateiro."
}

IMAGES_POOL = [
    "/images/blog/2026/harvest.jpg",
    "/images/blog/2026/quinta-estate.jpg",
    "/images/blog/2026/golden-hour.jpg",
    "/images/blog/2026/gastronomy.jpg",
    "/images/blog/2026/vindima-antecipada-2026.jpg",
    "/images/blog/2026/wine-festival-julho-2026.jpg",
]

MONTH_NAMES_PT = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
MONTH_NAMES_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
MONTH_NAMES_ES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
MONTH_NAMES_FR = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]
MONTH_NAMES_DE = ["Januar", "Februar", "Maerz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

def generate_article_with_gemini(api_key: str, topic: str, month: int, year: int) -> dict:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
    
    prompt = f"""
Voce e o Diretor Editorial da NORTHE (northetours.com), uma empresa de turismo privado de ultraluxo sediada no Porto, Portugal.
A NORTHE opera tours 100% privados com motorista-guia sommelier e frota executiva Mercedes-Benz pelo Vale do Douro, Porto e Norte de Portugal.

Gere um novo artigo de blog mensal focado no tema sazonal: "{topic}" para {MONTH_NAMES_PT[month - 1]} de {year}.
O artigo deve ser elegante, inspirador, com rigor enologico, sem cliches de IA, focado no viajante de luxo e ligando sutilmente aos tours privados NORTHE.

Gere a resposta EXCLUSIVAMENTE em formato JSON com a seguinte estrutura:
{{
  "slug": "slug-em-kebab-case-{year}",
  "category": {{
    "pt": "Categoria PT",
    "en": "Category EN",
    "es": "Categoria ES",
    "fr": "Categorie FR",
    "de": "Kategorie DE"
  }},
  "date": {{
    "pt": "1 de {MONTH_NAMES_PT[month - 1]} de {year}",
    "en": "{MONTH_NAMES_EN[month - 1]} 1, {year}",
    "es": "1 de {MONTH_NAMES_ES[month - 1]} de {year}",
    "fr": "1er {MONTH_NAMES_FR[month - 1]} {year}",
    "de": "1. {MONTH_NAMES_DE[month - 1]} {year}"
  }},
  "readTime": {{
    "pt": "4 min de leitura",
    "en": "4 min read",
    "es": "4 min de lectura",
    "fr": "4 min de lecture",
    "de": "4 Min. Lesezeit"
  }},
  "title": {{
    "pt": "Titulo refinado em PT",
    "en": "Refined title in EN",
    "es": "Titulo refinado en ES",
    "fr": "Titre raffine en FR",
    "de": "Raffinierter Titel in DE"
  }},
  "excerpt": {{
    "pt": "Excerto de 2 frases em PT",
    "en": "2-sentence excerpt in EN",
    "es": "Extracto de 2 frases en ES",
    "fr": "Extrait de 2 phrases en FR",
    "de": "2-Satz-Auszug in DE"
  }},
  "paragraphs": {{
    "pt": [
      "Paragrafo 1 de imersao no terroir e estacao.",
      "Paragrafo 2 com detalhe exclusivo da experiencia privada e quintas.",
      "Paragrafo 3 sobre gastronomia, provas e cultura do vinho.",
      "Paragrafo 4 convidando a explorar com a NORTHE em viatura executiva privada."
    ],
    "en": ["P1 EN", "P2 EN", "P3 EN", "P4 EN"],
    "es": ["P1 ES", "P2 ES", "P3 ES", "P4 ES"],
    "fr": ["P1 FR", "P2 FR", "P3 FR", "P4 FR"],
    "de": ["P1 DE", "P2 DE", "P3 DE", "P4 DE"]
  }}
}}
Responda APENAS com o JSON cru, sem markdown.
"""

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.7, "maxOutputTokens": 4096}
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )

    try:
        with urllib.request.urlopen(req, timeout=35) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            content_text = data["candidates"][0]["content"]["parts"][0]["text"]
            clean_json = re.sub(r"^```json\s*", "", content_text.strip())
            clean_json = re.sub(r"\s*```$", "", clean_json)
            return json.loads(clean_json)
    except Exception as e:
        print(f"Erro ao chamar Gemini API: {e}", file=sys.stderr)
        return None

def fallback_article(month: int, year: int) -> dict:
    m_pt = MONTH_NAMES_PT[month - 1]
    m_en = MONTH_NAMES_EN[month - 1]
    m_es = MONTH_NAMES_ES[month - 1]
    m_fr = MONTH_NAMES_FR[month - 1]
    m_de = MONTH_NAMES_DE[month - 1]

    return {
        "slug": f"segredos-do-douro-{month:02d}-{year}",
        "category": {
            "pt": "Enoturismo de Luxo",
            "en": "Luxury Wine Travel",
            "es": "Enoturismo de Lujo",
            "fr": "Oenotourisme de Luxe",
            "de": "Exklusiver Weintourismus"
        },
        "date": {
            "pt": f"1 de {m_pt} de {year}",
            "en": f"{m_en} 1, {year}",
            "es": f"1 de {m_es} de {year}",
            "fr": f"1er {m_fr} {year}",
            "de": f"1. {m_de} {year}"
        },
        "readTime": {
            "pt": "4 min de leitura",
            "en": "4 min read",
            "es": "4 min de lectura",
            "fr": "4 min de lecture",
            "de": "4 Min. Lesezeit"
        },
        "title": {
            "pt": f"O Douro em {m_pt}: Momentos Exclusivos e os Segredos das Quintas",
            "en": f"The Douro in {m_en}: Exclusive Moments & Vineyard Secrets",
            "es": f"El Duero en {m_es}: Momentos Exclusivos y Secretos de las Fincas",
            "fr": f"Le Douro en {m_fr} : Moments Exclusifs et Secrets des Domaines",
            "de": f"Das Douro-Tal im {m_de}: Exklusive Momente & Weingut-Geheimnisse"
        },
        "excerpt": {
            "pt": f"Descubra a atmosfera magica de {m_pt} no Vale do Douro. Uma perspetiva privada sobre os vinhos de excecao e a hospitalidade duriense.",
            "en": f"Discover the magic of {m_en} in the Douro Valley. A private insider perspective on rare vintages and refined Portuguese hospitality.",
            "es": f"Descubra la magia de {m_es} en el Valle del Duero. Una perspectiva privada de vinos excepcionales y hospitalidad portuguesa.",
            "fr": f"Decouvrez la magie de {m_fr} dans la vallee du Douro. Une immersion privee au coeur de millesimes d'exception.",
            "de": f"Erleben Sie den Zauber von {m_de} im Douro-Tal. Ein privater Einblick in seltene Jahrgaenge und portugiesische Spitzenweine."
        },
        "paragraphs": {
            "pt": [
                f"O mes de {m_pt} traz ao Vale do Douro uma serenidade impar, longe das correntes turisticas convencionais.",
                "Nas quintas historicas de acesso reservado, os enologos abrem as suas caves para provas verticais de colheitas especiais.",
                "Cada almoco regional e servido em terracos privativos com vista sobre as curvas do rio e a arquitetura monumental dos socalcos.",
                "A NORTHE assegura que cada detalhe do seu dia decorra com pontualidade, conforto e total exclusividade a bordo da nossa frota executiva."
            ],
            "en": [
                f"The month of {m_en} brings a peaceful serenity to the Douro Valley, away from conventional tourist routes.",
                "At secluded private boutique estates, winemakers open their historic cellars for private vertical tastings.",
                "Every estate lunch is savored on panoramic private terraces overlooking the dramatic river curves and schist terraces.",
                "NORTHE curates every step of your private day with executive Mercedes-Benz comfort, dedicated sommelier guide, and flawless attention."
            ],
            "es": [
                f"El mes de {m_es} regala al Valle del Duero una tranquilidad inigualable lejos de las rutas turisticas habituales.",
                "En bodegas historicas de acceso exclusivo, los enologos abren sus cavas para catas verticales de cosechas selectas.",
                "Cada almuerzo se disfruta en terrazas panoramicas privadas con vistas sobre las laderas pizarrosas del rio.",
                "NORTHE garantiza un dia inolvidable con vehiculo ejecutivo privado, chofer-guia experto y maxima exclusividad."
            ],
            "fr": [
                f"Le mois de {m_fr} insuffle a la vallee du Douro une quietude rare, loin de l'effervescence touristique.",
                "Dans des domaines historiques preserves, les maitres de chais ouvrent leurs caves pour des degustations verticales exclusives.",
                "Chaque dejeuner gastronomique est servi sur des terrasses privatives dominant les meandres du fleuve.",
                "NORTHE orchestre chaque detail en van executif Mercedes-Benz avec guide sommelier prive et flexibilite absolue."
            ],
            "de": [
                f"Der {m_de} verleiht dem Douro-Tal eine erhabene Ruhe fernab ausgetretener Touristenpfade.",
                "Auf historischen Weinguetern oeffnen Winzerfamilien ihre privaten Keller fuer vertikale Jahrgangsverkostungen.",
                "Jedes regionale Menue wird auf Panoramaterrassen ueber dem Fluss mit atemberaubendem Blick zelebriert.",
                "NORTHE begleitet Sie mit erstklassigen Mercedes-Benz Fahrzeugen, persoenlichem Weinguide und massgeschneidertem Service."
            ]
        }
    }

def inject_article_into_content_file(article: dict, image_path: str, filepath: str = "src/content.ts"):
    if not os.path.exists(filepath):
        print(f"Ficheiro nao encontrado: {filepath}", file=sys.stderr)
        return False

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    languages = ["pt", "en", "es", "fr", "de"]

    for lang in languages:
        paragraphs_js = ",\n".join(
            [f"                        {{ type: 'p', text: {json.dumps(p, ensure_ascii=False)} }}" for p in article["paragraphs"][lang]]
        )

        item_js = f"""                {{
                    slug: '{article["slug"]}',
                    title: {json.dumps(article["title"][lang], ensure_ascii=False)},
                    excerpt: {json.dumps(article["excerpt"][lang], ensure_ascii=False)},
                    date: {json.dumps(article["date"][lang], ensure_ascii=False)},
                    category: {json.dumps(article["category"][lang], ensure_ascii=False)},
                    image: '{image_path}',
                    readTime: {json.dumps(article["readTime"][lang], ensure_ascii=False)},
                    bookable: true,
                    fullContent: [
{paragraphs_js}
                    ]
                }},"""

        pattern = rf"({lang}:\s*\{{[^}}]*?blog:\s*\{{[^}}]*?items:\s*\[\s*\n)"
        match = re.search(pattern, content, flags=re.DOTALL)
        if match:
            pos = match.end()
            content = content[:pos] + item_js + "\n" + content[pos:]
            print(f"[OK] Injetado artigo ({article['slug']}) na secao de blog: {lang}")
        else:
            print(f"[AVISO] Nao foi possivel localizar blog.items para: {lang}", file=sys.stderr)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    return True

def main():
    now = datetime.now()
    month = now.month
    year = now.year

    api_key = os.environ.get("GEMINI_API_KEY", "").strip()
    topic = os.environ.get("BLOG_TOPIC", "").strip()
    if not topic:
        topic = SEASONAL_CALENDAR.get(month, "Enoturismo de luxo no Vale do Douro e Norte de Portugal")

    print(f"=== NORTHE Editorial Bot ===")
    print(f"Mes/Ano: {month}/{year}")
    print(f"Tema: {topic}")

    article = None
    if api_key:
        print("A chamar Gemini API para gerar artigo nos 5 idiomas...")
        article = generate_article_with_gemini(api_key, topic, month, year)

    if not article:
        print("A usar artigo editorial sazonal calibrado (fallback)...")
        article = fallback_article(month, year)

    image_idx = (month - 1) % len(IMAGES_POOL)
    image_path = IMAGES_POOL[image_idx]

    success = inject_article_into_content_file(article, image_path, "src/content.ts")
    if success:
        print(f"[SUCESSO] Novo artigo '{article['slug']}' adicionado com sucesso em src/content.ts!")
    else:
        sys.exit(1)

if __name__ == "__main__":
    main()
