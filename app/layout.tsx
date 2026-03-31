import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'K-Beauty Portal | AIパーソナルカラー診断 × 韓国コスメランキング',
  description: '韓国コスメのランキング・口コミ・AIパーソナルカラー診断が全部そろうビューティーポータル',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
