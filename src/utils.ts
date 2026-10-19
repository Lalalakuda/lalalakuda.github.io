// base 設定（サブパス公開）があってもリンクが壊れないようにするヘルパー
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
