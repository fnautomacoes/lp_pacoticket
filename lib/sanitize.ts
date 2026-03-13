// lib/sanitize.ts
// Sanitizes untrusted HTML before saving to DB or rendering.
// Also provides markdownToHtml() to convert Markdown → sanitized HTML.
// Allowlist-based: strips scripts, iframes, and other dangerous tags/attributes.

import sanitizeHtml from 'sanitize-html'
import { marked } from 'marked'

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

// Convert Markdown to sanitized HTML (used by blog save action and render page)
export async function markdownToHtml(markdown: string): Promise<string> {
  const html = await marked(markdown, { breaks: true })
  return sanitizeContent(html)
}
