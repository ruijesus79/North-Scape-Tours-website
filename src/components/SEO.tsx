import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
}

export default function SEO({ title, description, lang }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [title, description, lang]);

  return null;
}
