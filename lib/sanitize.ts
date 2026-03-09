// lib/sanitize.ts
// Sanitizes untrusted HTML before saving to DB or rendering.
// Allowlist-based: strips scripts, iframes, and other dangerous tags/attributes.

import sanitizeHtml from 'sanitize-html'

const ALLOWED_TAGS = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'br', 'hr',
  'strong', 'em', 'u', 's', 'code', 'pre', 'blockquote',
  'ul', 'ol', 'li',
  'a',
  'img',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'div', 'span',
]

const ALLOWED_ATTRIBUTES: sanitizeHtml.IOptions['allowedAttributes'] = {
  a:   ['href', 'target', 'rel'],
  img: ['src', 'alt', 'width', 'height'],
  '*': ['class', 'id'],
}

export function sanitizeContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags:       ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRIBUTES,
    allowedSchemes:    ['http', 'https', 'mailto'],
    // Force noopener on external links
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }),
    },
  })
}
