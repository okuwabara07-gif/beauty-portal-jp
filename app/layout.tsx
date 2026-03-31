import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'K-Beauty Portal',
  description: '韓国コスメ ランキング・口コミ・AIパーソナルカラー診断',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
