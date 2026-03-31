import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'K-Beauty Portal',
  description: '韓国コスメ ランキング・口コミ・AI診断',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{margin:0,padding:0,background:'#FAFAF8'}}>{children}</body>
    </html>
  );
}
