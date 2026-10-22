import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
  image?: string;
  url?: string;
}

const OG_LOCALE_MAP: Record<string, string> = {
  pt: 'pt_PT',
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
};

const HREFLANG_LANGS = ['pt', 'en', 'es', 'fr', 'de'] as const;

export default function SEO({ title, description, lang = 'pt', image, url }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    if (image) {
      const fullImageUrl = image.startsWith('http')
        ? image
        : `https://www.northetours.com${image.startsWith('/') ? '' : '/'}${image}`;
      setMeta('property', 'og:image', fullImageUrl);
      setMeta('name', 'twitter:image', fullImageUrl);
      setMeta('name', 'twitter:card', 'summary_large_image');
    }

    if (url) {
      const baseFullUrl = url.startsWith('http')
        ? url.split('?')[0]
        : `https://www.northetours.com${url.startsWith('/') ? '' : '/'}${url.split('?')[0]}`;

      const localizedCanonicalUrl =
        lang && lang !== 'pt' ? `${baseFullUrl}?lang=${lang}` : baseFullUrl;

      setMeta('property', 'og:url', localizedCanonicalUrl);
      setMeta('name', 'twitter:url', localizedCanonicalUrl);

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', localizedCanonicalUrl);

      // Update bidirectional hreflang mesh for International SEO (PT, EN, ES, FR, DE + x-default)
      for (const hLang of HREFLANG_LANGS) {
        const href = hLang === 'pt' ? baseFullUrl : `${baseFullUrl}?lang=${hLang}`;
        setHreflang(hLang, href);
      }
      setHreflang('x-default', baseFullUrl);
    }

    if (lang) {
      document.documentElement.lang = lang;
      setMeta('property', 'og:locale', OG_LOCALE_MAP[lang] || 'pt_PT');
    }
  }, [title, description, lang, image, url]);

  return null;
}

function setMeta(attrName: 'name' | 'property', attrValue: string, content: string) {
  let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function setHreflang(hreflang: string, href: string) {
  let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}
