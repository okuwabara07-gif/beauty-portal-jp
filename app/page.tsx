export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif',maxWidth:480,margin:'0 auto',padding:'20px 16px'}}>
      <p style={{fontSize:10,letterSpacing:4,color:'#C4B5AD',marginBottom:8}}>K BEAUTY PORTAL</p>
      <h1 style={{fontSize:22,fontWeight:400,color:'#2C2420',fontStyle:'italic',marginBottom:20}}>
        今週のランキング
      </h1>
      <a href="https://kcos-review-jp.vercel.app"
        style={{display:'block',padding:'14px 16px',background:'#2C2420',color:'#fff',textDecoration:'none',marginBottom:10,fontSize:13}}>
        韓国コスメランキング →
      </a>
      <a href="https://haircolor-lab.vercel.app"
        style={{display:'block',padding:'14px 16px',border:'0.5px solid #2C2420',color:'#2C2420',textDecoration:'none',marginBottom:10,fontSize:13}}>
        ヘアカラーLAB →
      </a>
      <a href="https://skincare-note-jp.vercel.app"
        style={{display:'block',padding:'14px 16px',border:'0.5px solid #2C2420',color:'#2C2420',textDecoration:'none',fontSize:13}}>
        スキンケアNOTE →
      </a>
    </main>
  );
}
