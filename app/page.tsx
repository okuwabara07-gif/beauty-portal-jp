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

const K_SITES = [
  { name: "K-Cosme Review", desc: "韓国コスメ総合レビュー", url: "https://kcos-review-jp.vercel.app", tag: "コスメ" },
  { name: "K-Make Lab", desc: "韓国メイクの最新トレンド", url: "https://kmake-lab-jp.vercel.app", tag: "メイク" },
  { name: "K-Beauty Brand", desc: "ブランド別完全ガイド", url: "https://kbeauty-brand-jp.vercel.app", tag: "ブランド" },
  { name: "K-Skin Lab", desc: "韓国スキンケア成分解析", url: "https://kskin-lab-jp.vercel.app", tag: "スキンケア" },
  { name: "K-Drama Beauty", desc: "韓国女優のビューティー秘訣", url: "https://kdrama-beauty-jp.vercel.app", tag: "ドラマ" },
  { name: "Makeup Lab", desc: "メイクのやり方・比較", url: "https://makeup-lab-jp.vercel.app", tag: "メイク" },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="site-title">Beauty Portal</div>
        <div className="site-subtitle">K-Beauty · Skincare · Makeup — Japan's #1 Korean Beauty Hub</div>
      </header>
      <main>
        <div className="portal-banner">
          <div>
            <div className="portal-banner-label">AI診断</div>
            <div className="portal-banner-title">AIパーソナルカラー診断 × 韓国コスメ</div>
          </div>
          <a href="https://colorpass.vercel.app" target="_blank" className="portal-banner-link">診断する →</a>
        </div>

        <div className="section-label">K-Beauty Sites — 専門サイト一覧</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'10px',margin:'0 0 2rem'}}>
          {K_SITES.map(s => (
            <a key={s.name} href={s.url} target="_blank" style={{
              display:'block',padding:'1rem',
              background:'var(--surface)',
              border:'0.5px solid var(--border)',
              textDecoration:'none',
              borderRadius:'2px'
            }}>
              <div style={{fontSize:'0.6rem',letterSpacing:'0.15em',color:'var(--text-secondary)',textTransform:'uppercase',marginBottom:'4px'}}>{s.tag}</div>
              <div style={{fontSize:'0.85rem',fontWeight:400,color:'var(--text-primary)',marginBottom:'4px'}}>{s.name}</div>
              <div style={{fontSize:'0.7rem',color:'var(--text-secondary)'}}>{s.desc}</div>
            </a>
          ))}
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
          <a href="https://haircolor-lab.vercel.app" target="_blank" style={{color:'var(--text-secondary)'}}>Hair Color Lab →</a>
        </footer>
      </main>
    </main>
  )
}
