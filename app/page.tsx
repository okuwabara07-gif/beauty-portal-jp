import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts().slice(0, 6)
  return (
    <main style={{fontFamily:'sans-serif',maxWidth:'1100px',margin:'0 auto',padding:'2rem 1.5rem'}}>
      <div style={{textAlign:'center',marginBottom:'3rem'}}>
        <h1 style={{fontSize:'2rem',fontWeight:900,color:'#1a1a2e',marginBottom:'0.5rem'}}>Beauty Portal Japan</h1>
        <p style={{color:'#666',fontSize:'0.9rem'}}>美容・健康・ライフスタイルの情報サイト総合ポータル</p>
      </div>

      <div style={{margin:'2rem 0',padding:'1.25rem',background:'linear-gradient(135deg,#faf7ff,#f5eeff)',borderRadius:'16px',border:'1.5px solid #e8d4ff'}}>
        <p style={{fontSize:'0.75rem',color:'#9333ea',fontWeight:700,marginBottom:'12px'}}>おすすめピックアップ</p>
        <a href="https://px.a8.net/svt/ejp?a8mat=4AZR8U+CRMNSI+1USQ+4YM976" target="_blank" rel="noopener noreferrer sponsored"
          style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 16px',background:'white',borderRadius:'12px',textDecoration:'none',border:'1px solid #f0e6ff',marginBottom:'8px'}}>
          <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#FF6B9D',flexShrink:0}}></div>
          <div>
            <div style={{fontSize:'0.8rem',fontWeight:700,color:'#333'}}>オルビス</div>
            <div style={{fontSize:'0.7rem',color:'#888'}}>EPC246円 次世代クレンジング</div>
          </div>
          <span style={{marginLeft:'auto',fontSize:'0.75rem',color:'#FF6B9D',fontWeight:700}}>→ 詳しく見る</span>
        </a>
      </div>

      <h2 style={{fontSize:'1rem',fontWeight:700,color:'#333',margin:'2rem 0 1rem'}}>サイト一覧</h2>
      
      <div style={{marginBottom:'1.5rem'}}>
        <h3 style={{fontSize:'0.75rem',fontWeight:700,color:'#9333ea',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>美容・スキンケア</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'6px'}}>
          <a href="https://haircolor-lab.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ヘアカラーLab
          </a>
          <a href="https://skincare-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            スキンケアNote
          </a>
          <a href="https://acne-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ニキビケアLab
          </a>
          <a href="https://makeup-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            メイクアップLab
          </a>
          <a href="https://nail-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ネイルLab
          </a>
          <a href="https://eyelash-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            まつ毛Lab
          </a>
          <a href="https://eyebrow-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            眉毛Lab
          </a>
          <a href="https://eyeshadow-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            アイシャドウLab
          </a>
          <a href="https://foundation-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ファンデーションLab
          </a>
          <a href="https://lip-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            リップLab
          </a>
          <a href="https://sunscreen-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            日焼け止めLab
          </a>
          <a href="https://whitening-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            美白Lab
          </a>
          <a href="https://organic-cosme-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            オーガニックコスメ
          </a>
          <a href="https://kbeauty-brand-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            韓国コスメ
          </a>
          <a href="https://kcos-review-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            韓国コスメReview
          </a>
          <a href="https://kmake-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            韓国メイクLab
          </a>
          <a href="https://kskin-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            韓国スキンLab
          </a>
          <a href="https://kdrama-beauty-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            韓ドラ美容
          </a>
          <a href="https://perfume-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            香水Lab
          </a>
          <a href="https://over40-beauty-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            40代美容
          </a>
          <a href="https://teens-beauty-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            10代美容
          </a>
          <a href="https://mens-beauty-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            メンズ美容
          </a>
          <a href="https://mama-beauty-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ママ美容
          </a>
        </div>
      </div>
      <div style={{marginBottom:'1.5rem'}}>
        <h3 style={{fontSize:'0.75rem',fontWeight:700,color:'#9333ea',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>ヘアケア</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'6px'}}>
          <a href="https://hair-care-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ヘアケア
          </a>
          <a href="https://hair-loss-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            薄毛対策
          </a>
          <a href="https://hair-removal-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            脱毛
          </a>
          <a href="https://perm-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            パーマLab
          </a>
          <a href="https://mens-hair-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            メンズヘア
          </a>
        </div>
      </div>
      <div style={{marginBottom:'1.5rem'}}>
        <h3 style={{fontSize:'0.75rem',fontWeight:700,color:'#9333ea',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>ダイエット・フィットネス</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'6px'}}>
          <a href="https://diet-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ダイエットLab
          </a>
          <a href="https://fitness-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            フィットネスLab
          </a>
          <a href="https://yoga-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ヨガLab
          </a>
          <a href="https://yoga-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ヨガNote
          </a>
          <a href="https://yoga-pose-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ヨガポーズ
          </a>
          <a href="https://pilates-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ピラティスLab
          </a>
          <a href="https://protein-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            プロテインLab
          </a>
          <a href="https://supplement-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            サプリメント
          </a>
          <a href="https://bodymake-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ボディメイクLab
          </a>
          <a href="https://calorie-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            カロリーLab
          </a>
          <a href="https://keto-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ケトLab
          </a>
          <a href="https://intermittent-fasting-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            断食Lab
          </a>
          <a href="https://diet-recipe-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ダイエットレシピ
          </a>
          <a href="https://running-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ランニングLab
          </a>
          <a href="https://running-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ランニングNote
          </a>
          <a href="https://swim-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            水泳Note
          </a>
          <a href="https://stretch-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ストレッチLab
          </a>
          <a href="https://body-care-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ボディケア
          </a>
        </div>
      </div>
      <div style={{marginBottom:'1.5rem'}}>
        <h3 style={{fontSize:'0.75rem',fontWeight:700,color:'#9333ea',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>ライフスタイル</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'6px'}}>
          <a href="https://career-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            キャリアNote
          </a>
          <a href="https://side-job-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            副業Lab
          </a>
          <a href="https://money-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            マネーNote
          </a>
          <a href="https://english-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            英語Lab
          </a>
          <a href="https://fashion-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ファッションNote
          </a>
          <a href="https://interior-log-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            インテリアLog
          </a>
          <a href="https://travel-log-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            トラベルLog
          </a>
          <a href="https://cooking-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            料理Note
          </a>
          <a href="https://coffee-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            コーヒーNote
          </a>
          <a href="https://reading-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            読書Lab
          </a>
          <a href="https://music-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            音楽Lab
          </a>
          <a href="https://photo-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            フォトLab
          </a>
          <a href="https://handmade-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ハンドメイドLab
          </a>
          <a href="https://pet-love-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ペットLove
          </a>
          <a href="https://baby-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            育児Note
          </a>
          <a href="https://childcare-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            育児Lab
          </a>
          <a href="https://sleep-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            睡眠Lab
          </a>
          <a href="https://mindfulness-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            マインドフルネス
          </a>
          <a href="https://sauna-log-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            サウナLog
          </a>
          <a href="https://outdoor-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            アウトドアNote
          </a>
          <a href="https://golf-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ゴルフLab
          </a>
          <a href="https://bike-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            バイクNote
          </a>
          <a href="https://gadget-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ガジェットLab
          </a>
          <a href="https://camera-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            カメラLab
          </a>
        </div>
      </div>
      <div style={{marginBottom:'1.5rem'}}>
        <h3 style={{fontSize:'0.75rem',fontWeight:700,color:'#9333ea',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>マネー・キャリア</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'6px'}}>
          <a href="https://investment-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            投資Lab
          </a>
          <a href="https://nisa-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            NISANote
          </a>
          <a href="https://crypto-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            仮想通貨Lab
          </a>
          <a href="https://fx-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            FXNote
          </a>
          <a href="https://saving-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            節約Lab
          </a>
          <a href="https://insurance-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            保険Note
          </a>
          <a href="https://loan-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ローンNote
          </a>
          <a href="https://card-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            カードNote
          </a>
          <a href="https://credit-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            信用情報Lab
          </a>
          <a href="https://pension-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            年金Lab
          </a>
          <a href="https://tax-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            節税Lab
          </a>
          <a href="https://real-estate-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            不動産Lab
          </a>
          <a href="https://freelance-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            フリーランスNote
          </a>
          <a href="https://remote-work-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            リモートワーク
          </a>
          <a href="https://startup-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            起業Note
          </a>
          <a href="https://job-change-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            転職Lab
          </a>
          <a href="https://skill-up-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            スキルアップ
          </a>
          <a href="https://programming-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            プログラミングLab
          </a>
          <a href="https://sns-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            SNSLab
          </a>
          <a href="https://youtube-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            YouTubeLab
          </a>
          <a href="https://affiliate-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            アフィリエイトLab
          </a>
          <a href="https://dropshipping-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            物販Lab
          </a>
        </div>
      </div>
      <div style={{marginBottom:'1.5rem'}}>
        <h3 style={{fontSize:'0.75rem',fontWeight:700,color:'#9333ea',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>健康・食</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'6px'}}>
          <a href="https://health-note-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            健康Note
          </a>
          <a href="https://vegan-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ビーガンLab
          </a>
          <a href="https://beauty-food-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            美容食Lab
          </a>
          <a href="https://anti-aging-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            アンチエイジング
          </a>
          <a href="https://ai-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            AILab
          </a>
          <a href="https://web3-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            Web3Lab
          </a>
          <a href="https://study-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            勉強Lab
          </a>
          <a href="https://beauty-device-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            美容機器Lab
          </a>
          <a href="https://organic-cosme-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            オーガニック
          </a>
          <a href="https://photo-lab-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            写真Lab
          </a>
        </div>
      </div>
      <div style={{marginBottom:'1.5rem'}}>
        <h3 style={{fontSize:'0.75rem',fontWeight:700,color:'#9333ea',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>サッカー</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'6px'}}>
          <a href="https://junior-soccer-jp.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{display:'block',padding:'8px 10px',background:'white',borderRadius:'8px',textDecoration:'none',border:'1px solid #e8d4ff',fontSize:'0.75rem',fontWeight:600,color:'#333',transition:'all .2s'}}>
            ジュニアサッカー用品ガイド
          </a>
        </div>
      </div>

      <div style={{marginTop:'3rem',paddingTop:'2rem',borderTop:'1px solid #e8d4ff'}}>
        <h2 style={{fontSize:'1rem',fontWeight:700,color:'#333',marginBottom:'1rem'}}>最新記事</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'12px'}}>
          {posts.map((post: any) => (
            <a key={post.slug} href={'/blog/'+post.slug}
              style={{display:'block',padding:'1rem',background:'white',borderRadius:'12px',border:'1px solid #e8d4ff',textDecoration:'none'}}>
              <div style={{fontSize:'0.7rem',color:'#9333ea',marginBottom:'4px'}}>{}</div>
              <div style={{fontSize:'0.85rem',fontWeight:700,color:'#333'}}>{}</div>
            </a>
          ))}
        </div>
      </div>

      <footer style={{marginTop:'3rem',paddingTop:'1.5rem',borderTop:'1px solid #e8d4ff',textAlign:'center',fontSize:'0.7rem',color:'#888'}}>
        <p>© 2026 Beauty Portal Japan | AOKAE合同会社</p>
        <p style={{marginTop:'4px'}}>本サイトはアフィリエイト広告を含みます</p>
      </footer>
    </main>
  )
}
