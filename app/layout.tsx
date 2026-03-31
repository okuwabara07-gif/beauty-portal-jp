import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Beauty Portal', description: '韓国コスメ・スキンケア・メイクの最新ランキング' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3460729726810386" crossorigin="anonymous"></script>
      </head><body>{children}</body></html>)
}
