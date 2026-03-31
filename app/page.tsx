const ARTICLES = [
  "【2026最新】韓国コスメブランド人気ランキング TOP20",
  "rom&nd ジューシーラスティングティント 全色レビュー",
  "COSRX スネイルムチン美容液の効果と使い方",
  "LANEIGE リップスリーピングマスク 徹底比較",
  "パーソナルカラー診断で選ぶ韓国コスメ完全ガイド",
  "イエベ・ブルベ別おすすめファンデーション 2026",
  "韓国スキンケア 朝のルーティン完全版",
  "Qoo10メガ割で買うべき韓国コスメ まとめ",
]
export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="site-title">Beauty Portal</div>
        <div className="site-subtitle">K-Beauty · Skincare · Makeup</div>
      </header>
      <main>
        <div className="portal-banner">
          <div>
            <div className="portal-banner-label">AI診断</div>
            <div className="portal-banner-title">AIパーソナルカラー診断 × 韓国コスメ</div>
          </div>
          <a href="https://colorpass.vercel.app" target="_blank" className="portal-banner-link">診断する →</a>
        </div>
        <div className="section-label">K-Beauty · Top Articles</div>
        <div className="article-list">
          {ARTICLES.map((a, i) => (
            <div key={i} className="article-item">
              <span className="article-num">{String(i+1).padStart(2,'0')}</span>
              <a href="#" className="article-link">{a}</a>
            </div>
          ))}
        </div>
        <div className="ad-slot">Advertisement</div>
        <footer className="site-footer">
          <span>© 2026 AOKAE LLC</span>
          <a href="https://makeup-lab-jp.vercel.app" target="_blank" style={{color:'var(--text-secondary)'}}>Makeup Lab →</a>
        </footer>
      </main>
    </main>
  )
}
