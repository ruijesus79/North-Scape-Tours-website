import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
  image?: string;
  url?: string;
}

export default function SEO({ title, description, lang, image, url }: SEOProps) {
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
      const fullImageUrl = image.startsWith('http') ? image : `https://northetours.com${image.startsWith('/') ? '' : '/'}${image}`;
      setMeta('property', 'og:image', fullImageUrl);
      setMeta('name', 'twitter:image', fullImageUrl);
      setMeta('name', 'twitter:card', 'summary_large_image');
    }

    if (url) {
      const fullUrl = url.startsWith('http') ? url : `https://northetours.com${url.startsWith('/') ? '' : '/'}${url}`;
      setMeta('property', 'og:url', fullUrl);

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', fullUrl);
    }

    if (lang) {
      document.documentElement.lang = lang;
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

