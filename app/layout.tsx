import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Beauty Portal', description: '韓国コスメ・スキンケア・メイクの最新ランキング' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja"><body>{children}</body></html>)
}
