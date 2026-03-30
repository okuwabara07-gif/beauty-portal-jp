import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'K-Beauty Portal | 韓国コスメ ランキング・口コミ・AI診断',
  description: '韓国コスメのランキング、口コミ、新製品情報、AIパーソナルカラー診断が全部そろうビューティーポータル',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
