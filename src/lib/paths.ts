/** Prefix a site-root-relative path with the GitHub Pages base. */
export function withBase(path = ""): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\/+/, "");
  return `${base}${normalized}`;
}

export function sectionHref(hash: string): string {
  const id = hash.replace(/^#/, "");
  return `${import.meta.env.BASE_URL}#${id}`;
}
