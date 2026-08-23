// Small shared SEO helpers. Search engines typically truncate a meta
// description around 155-160 characters — several of this site's on-page
// copy blocks (locality blurbs especially) run well past that because
// they're written as one flowing editorial sentence for the page body, not
// as a meta tag. Rather than hand-authoring a second, shorter sentence for
// every one of the 25+ locality/service entries (or leaving the tag long
// enough that Google truncates it mid-word with "..."), this trims at the
// last whole word under the limit — same real, already-approved copy, just
// the length a meta description tag actually wants.
export function truncateForMeta(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trim()}…`;
}
