import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ALL_17_TOURS } from '../src/data/toursData.ts';
import { CONTENT } from '../src/content.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');

interface PageMeta {
  urlPath: string; // e.g. '/tours/porto-private-boat-tour'
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: object;
}

const pages: PageMeta[] = [];

// 1. All 18 Tours
for (const tour of ALL_17_TOURS) {
  const tourName = tour.name.pt;
  const tourDesc = tour.shortDesc.pt || (tour.subtitle ? tour.subtitle.pt : '');
  const tourImg = tour.cardImage || (tour.gallery && tour.gallery.length > 0 ? tour.gallery[0] : '/images/tours/douro-wine-gastronomy/douro-valley-private-boat-experience.webp');
  const fullImgUrl = tourImg.startsWith('http') ? tourImg : `https://www.northetours.com${tourImg.startsWith('/') ? '' : '/'}${tourImg}`;

  pages.push({
    urlPath: `/tours/${tour.id}`,
    title: `${tourName} | NORTHÉ Private Tours`,
    description: `${tourDesc} Experiência 100% privada com motorista-guia dedicado, carrinha executiva Mercedes-Benz e provas exclusivas.`,
    image: fullImgUrl,
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: tourName,
      description: tourDesc,
      image: fullImgUrl,
      provider: {
        '@type': 'TravelAgency',
        name: 'NORTHÉ Private Tours',
        url: 'https://www.northetours.com',
      },
      offers: {
        '@type': 'Offer',
        price: tour.startingPrice,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `https://www.northetours.com/tours/${tour.id}`,
      },
    },
  });
}

// 2. All 13 Blog Articles
const blogItems = CONTENT.pt.blog.items || [];
for (const post of blogItems) {
  const postImg = post.image || '/images/blog/2026/harvest.jpg';
  const fullImgUrl = postImg.startsWith('http') ? postImg : `https://www.northetours.com${postImg.startsWith('/') ? '' : '/'}${postImg}`;

  pages.push({
    urlPath: `/blog/${post.slug}`,
    title: `${post.title} | Blog NORTHÉ`,
    description: post.excerpt,
    image: fullImgUrl,
    type: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: fullImgUrl,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: 'NORTHÉ Private Tours',
      },
      publisher: {
        '@type': 'Organization',
        name: 'NORTHÉ Private Tours',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.northetours.com/images/logo/logo-northe-main.png',
        },
      },
      mainEntityOfPage: `https://www.northetours.com/blog/${post.slug}`,
    },
  });
}

// 3. Blog Index
pages.push({
  urlPath: '/blog',
  title: 'Blog & Roteiros Exclusivos no Douro e Porto | NORTHÉ',
  description: 'Descubra os melhores guias de viagem, enoturismo de luxo, cruzeiros fluviais privados e segredos do Douro Vinhateiro e Norte de Portugal.',
  image: 'https://www.northetours.com/images/tours/douro-wine-gastronomy/douro-valley-private-boat-experience.webp',
  type: 'website',
});

// 4. Legal Pages
pages.push({
  urlPath: '/termos',
  title: 'Termos e Condições Gerais | NORTHÉ Private Tours',
  description: 'Consulte os termos e condições gerais de reserva, política de cancelamento e segurança da NORTHÉ Private Tours.',
  type: 'website',
});

pages.push({
  urlPath: '/privacidade',
  title: 'Política de Privacidade e Cookies | NORTHÉ Private Tours',
  description: 'Informação detalhada sobre como tratamos os seus dados pessoais e garantimos a sua privacidade de acordo com o RGPD na NORTHÉ.',
  type: 'website',
});

console.log(`Prerendering metadata for ${pages.length} routes...`);

for (const page of pages) {
  const canonicalUrl = `https://www.northetours.com${page.urlPath}`;
  const outDir = path.join(distDir, page.urlPath.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });

  let html = template;

  // 1. Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);

  // 2. Replace description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${page.description.replace(/"/g, '&quot;')}" />`
  );

  // 3. Replace canonical
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // 4. Replace OG meta
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:title" content="${page.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:description" content="${page.description.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  if (page.image) {
    html = html.replace(
      /<meta\s+property=["']og:image["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:image" content="${page.image}" />`
    );
  }
  if (page.type) {
    html = html.replace(
      /<meta\s+property=["']og:type["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:type" content="${page.type}" />`
    );
  }

  // 5. Replace Twitter meta
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${page.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${page.description.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );
  if (page.image) {
    html = html.replace(
      /<meta\s+name=["']twitter:image["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:image" content="${page.image}" />`
    );
  }

  // 6. Inject Schema if present
  if (page.schema) {
    const schemaScript = `\n  <script type="application/ld+json">\n${JSON.stringify(page.schema, null, 2)}\n  </script>`;
    html = html.replace('</head>', `${schemaScript}\n</head>`);
  }

  const outFilePath = path.join(outDir, 'index.html');
  fs.writeFileSync(outFilePath, html, 'utf-8');
}

console.log(`Successfully generated static HTML for ${pages.length} canonical routes!`);
