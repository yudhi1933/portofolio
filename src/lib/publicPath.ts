export const PUBLIC_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const withBase = (path: string) => `${PUBLIC_BASE}${path}`;
