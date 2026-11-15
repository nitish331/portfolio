import { useEffect } from 'react';
import { SITE } from '../data/site.js';

const setMeta = (selector, value) => {
  document.querySelector(selector)?.setAttribute('content', value);
};

// Sets the tab title + description (and their social-card copies) for one page.
// index.html holds the site-wide defaults, which link previews (WhatsApp,
// LinkedIn…) read because they don't run JavaScript.
export default function usePageMeta({ title, description, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE.name}` : SITE.defaultTitle;
    const text = description ?? SITE.description;

    document.title = fullTitle;
    setMeta('meta[name="description"]', text);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', text);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', text);

    let robots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.append(robots);
      }
      robots.content = 'noindex';
    } else {
      robots?.remove();
    }
  }, [title, description, noindex]);
}
