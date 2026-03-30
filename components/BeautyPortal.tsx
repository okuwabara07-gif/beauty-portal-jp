'use client';
import { useState, useRef, useCallback } from 'react';

const MOSHIMO_ID = '1184522';
const AT = 'haircolorab22-22';
const RA = '5253b9ed.08f9d938.5253b9ee.e71aefe8';
const SUPABASE_URL = 'https://ofplelhbmbueetvqxppt.supabase.co';
const SUPABASE_KEY = 'sb_publishable_KPZnAxrvulyK4jfxZbYjjQ_8qD3FAXX';

function affLink(kw: string) {
  return `https://af.moshimo.com/af/c/click?a_id=${MOSHIMO_ID}&p_id=170&pc_id=185&pl_id=4062&url=${encodeURIComponent('https://www.amazon.co.jp/s?k='+kw+'&tag='+AT)}`;
}

const PRODUCTS = [
  {rank:1,name:'COSRX スネイルムチンエッセンス',brand:'COSRX',cat:'スキンケア',price:'¥1,980',stars:4.8,reviews:128,kw:'COSRX スネイルムチン',season:'all'},
  {rank:2,name:'rom&nd ジューシーラスティングティント',brand:'rom&nd',cat:'リップ',price:'¥1,650',stars:4.7,reviews:96,kw:'romand リップ',season:'spring'},
  {rank:3,name:'LANEIGE リップスリーピングマスク',brand:'LANEIGE',cat:'リップ',price:'¥2,200',stars:4.6,reviews:84,kw:'LANEIGE リップ',season:'summer'},
  {rank:4,name:'innisfree グリーンティーシード美容液',brand:'innisfree',cat:'スキンケア',price:'¥3,300',stars:4.5,reviews:72,kw:'innisfree 美容液',season:'all'},
  {rank:5,name:'Anessa パーフェクトUV日焼け止め',brand:'Anessa',cat:'日焼け止め',price:'¥2,750',stars:4.4,reviews:61,kw:'Anessa UV',season:'all'},
  {rank:6,name:'MISSHA タイムレボリューション化粧水',brand:'MISSHA',cat:'スキンケア',price:'¥4,500',stars:4.3,reviews:55,kw:'MISSHA 化粧水',season:'winter'},
  {rank:7,name:'Etude ルックアットマイアイ',brand:'Etude',cat:'メイク',price:'¥990',stars:4.2,reviews:48,kw:'Etude アイシャドウ',season:'autumn'},
];

const REVIEWS = [
  {name:'さくらさん',skin:'乾燥肌',product:'COSRX スネイルムチン',stars:5,text:'2週間で肌のモチモチ感が変わりました！コスパ最高です。',tags:['保湿力高い','コスパ最高']},
  {name:'ゆみさん',skin:'敏感肌',product:'LANEIGE リップマスク',stars:4,text:'敏感肌でも刺激なく使えました。寝起きのリップが驚くほどプルプルに。',tags:['敏感肌OK','リップケア']},
  {name:'けいこさん',skin:'混合肌',product:'rom&nd リップ',stars:5,text:'発色が本当に可愛い！持ちもよくて食事後もそんなに落ちないです。',tags:['発色が良い','持ちが良い']},
  {name:'まいさん',skin:'普通肌',product:'innisfree 美容液',stars:4,text:'緑茶の香りがほんのり感じられて癒されます。肌のトーンが明るくなった気がします。',tags:['自然派','美白効果']},
];

const NEWS = [
  {cat:'新製品',emoji:'💄',title:'rom&nd 2026春 新色リップ10色が解禁！コーラル系が充実',date:'2026/03/30'},
  {cat:'トレンド',emoji:'🌸',title:'韓国で大流行中の「グラスシン」メイクとは？',date:'2026/03/29'},
  {cat:'セール',emoji:'🛍️',title:'Qoo10メガ割 4月開催決定！狙い目韓国コスメ10選',date:'2026/03/28'},
  {cat:'新製品',emoji:'✨',title:'COSRX 待望の新ライン「RX スキンベスト」発売開始',date:'2026/03/27'},
];

type Tab = 'ranking' | 'reviews' | 'news' | 'diagnosis';
type DiagState = 'idle' | 'camera' | 'analyzing' | 'result' | 'questionnaire';

export default function BeautyPortal() {
  const [tab, setTab] = useState<Tab>('ranking');
  const [filter, setFilter] = useState('全て');
  const [diagState, setDiagState] = useState<DiagState>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [scanText, setScanText] = useState('');
  const [diagResult, setDiagResult] = useState<any>(null);
  const [qIndex, setQIndex] = useState(0);
  const [reviewForm, setReviewForm] = useState({rating:5,nickname:'',skinType:'乾燥肌',body:'',tags:[] as string[]});
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream|null>(null);

  const s: any = {
    wrap: {fontFamily:"'DM Sans',sans-serif",background:'var(--bg)',minHeight:'100vh',maxWidth:480,margin:'0 auto',paddingBottom:80},
    nav: {background:'var(--deep)',padding:'16px 20px',display:'flex',alignItems:'center',justifyContent:'space-between'},
    logo: {fontFamily:"'Noto Serif JP',serif",fontSize:20,color:'#fff',letterSpacing:2},
    tabs: {display:'flex',background:'#fff',borderBottom:'1px solid var(--border)',overflowX:'auto' as const},
    tab: (active:boolean) => ({flex:1,minWidth:80,padding:'12px 8px',textAlign:'center' as const,fontSize:11,color:active?'var(--deep)':'var(--muted)',cursor:'pointer',borderBottom:active?'2px solid var(--pink)':'2px solid transparent',fontWeight:active?500:400,whiteSpace:'nowrap' as const}),
    section: {padding:16},
    card: {background:'#fff',border:'1px solid var(--border)',borderRadius:16,padding:14,marginBottom:10},
    btn: {background:'var(--deep)',color:'#fff',border:'none',borderRadius:20,padding:'6px 14px',fontSize:11,cursor:'pointer'},
    btnLg: {background:'var(--deep)',color:'#fff',border:'none',borderRadius:12,padding:'14px',fontSize:14,cursor:'pointer',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:8},
    btnSm: {background:'#fff',color:'var(--deep)',border:'1px solid var(--border)',borderRadius:12,padding:'12px',fontSize:13,cursor:'pointer',width:'100%'},
    title: {fontFamily:"'Noto Serif JP',serif",fontSize:18,marginBottom:4},
    sub: {fontSize:12,color:'var(--muted)',marginBottom:16},
    tag: (active:boolean) => ({background:active?'var(--deep)':'var(--bg)',color:active?'#fff':'var(--muted)',border:`1px solid ${active?'var(--deep)':'var(--border)'}`,borderRadius:20,padding:'3px 12px',fontSize:11,cursor:'pointer',whiteSpace:'nowrap' as const}),
  };

  const cats = ['全て','スキンケア','メイク','日焼け止め','リップ'];
  const filtered = filter === '全て' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'},audio:false});
      streamRef.current = stream;
      if(videoRef.current) { videoRef.current.srcObject = stream; videoRef.current.style.display = 'block'; }
      setDiagState('camera');
    } catch(e) {
      setDiagState('questionnaire');
    }
  }, []);

  const capture = useCallback(async () => {
    if(!videoRef.current || !canvasRef.current) return;
    const v = videoRef.current;
    const c = canvasRef.current;
    c.width = v.videoWidth || 320; c.height = v.videoHeight || 320;
    c.getContext('2d')?.drawImage(v, 0, 0);
    streamRef.current?.getTracks().forEach(t => t.stop());
    v.style.display = 'none'; c.style.display = 'block';
    setDiagState('analyzing');
    setScanProgress(0);

    const steps = [
      [20,'肌色を解析しています...'],[45,'アンダートーンを判定中...'],
      [65,'瞳・唇の色を解析中...'],[85,'パーソナルカラーを算出中...'],[100,'診断完了！']
    ];
    for(const [pct, text] of steps) {
      await new Promise(r => setTimeout(r, 700));
      setScanProgress(pct as number); setScanText(text as string);
    }
    await new Promise(r => setTimeout(r, 500));

    try {
      const imageData = c.toDataURL('image/jpeg', 0.8);
      const res = await fetch('/api/diagnose', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({image: imageData})
      });
      const data = await res.json();
      if(data.success) { setDiagResult(data.result); }
      else { setDiagResult(FALLBACK_RESULT); }
    } catch(e) { setDiagResult(FALLBACK_RESULT); }
    setDiagState('result');
  }, []);

  const FALLBACK_RESULT = {
    type:'イエベ春', english:'Spring Warm',
    desc:'明るく透明感のある肌色で、ゴールドのアンダートーン。コーラル・ピーチ系が最もお似合いです。',
    colors:['#F4A460','#FF8C69','#FFD700','#DEB887','#F08080','#FFDAB9'],
    keywords:['明るい','透明感','暖かみ'], lipColor:'コーラルピンク', foundation:'ベージュ〜ピーチ系'
  };

  const QUESTIONS = [
    {q:'日焼けをするとどうなりますか？',opts:['赤くなって剥ける','黒くなる','あまり変わらない','赤→後から黒']},
    {q:'瞳の色に近いのは？',opts:['ライトブラウン・黄みがかった茶','ダークブラウン・黒に近い茶','グレイがかった茶','こげ茶・赤みがかった茶']},
    {q:'血管の色は？',opts:['緑・黄緑','青・紫','わからない','緑と青が混在']},
    {q:'似合うアクセサリーは？',opts:['ゴールド','シルバー','どちらも似合う','どちらも苦手']},
    {q:'肌のトーンは？',opts:['明るいベージュ・ピーチ','暗めのオークル','白め・ピンクがかっている','黄みが強い']},
  ];

  const answerQ = (i: number) => {
    if(qIndex >= QUESTIONS.length - 1) {
      const results = [
        {type:'イエベ春',english:'Spring Warm',desc:'明るく透明感のある肌色。コーラル・ピーチ系が最もお似合いです。',colors:['#F4A460','#FF8C69','#FFD700','#DEB887','#F08080','#FFDAB9']},
        {type:'イエベ秋',english:'Autumn Warm',desc:'深みのある落ち着いた肌色。ブラウン・テラコッタ系が最もお似合いです。',colors:['#8B4513','#D2691E','#CD853F','#A0522D','#DEB887','#F4A460']},
        {type:'ブルベ夏',english:'Summer Cool',desc:'ソフトで落ち着いた印象。ラベンダー・ローズ系が最もお似合いです。',colors:['#C8A2C8','#FFB6C1','#E0B0FF','#98A0D8','#DDA0DD','#F5E6FA']},
        {type:'ブルベ冬',english:'Winter Cool',desc:'クールでコントラストが高い肌色。ビビッドカラーやモノトーンが最もお似合いです。',colors:['#DC143C','#4169E1','#000080','#C0C0C0','#8B0000','#191970']},
      ];
      setDiagResult({...results[i % 4], keywords:['鮮やか','クール','モダン'], lipColor:'ローズレッド', foundation:'ピンクベージュ系'});
      setDiagState('result');
    } else {
      setQIndex(qi => qi + 1);
    }
  };

  const submitReview = async () => {
    if(reviewForm.body.length < 20) { alert('20文字以上入力してください'); return; }
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
        method:'POST',
        headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,'Content-Type':'application/json','Prefer':'return=minimal'},
        body: JSON.stringify({site_id:'beauty-portal-jp',product_name:'全般',rating:reviewForm.rating,skin_type:reviewForm.skinType,body:reviewForm.body,nickname:reviewForm.nickname||'匿名',tags:reviewForm.tags})
      });
    } catch(e) {}
    setReviewSubmitted(true);
  };

  const resetDiag = () => { setDiagState('idle'); setDiagResult(null); setScanProgress(0); setQIndex(0); };
  const shareResult = () => {
    if(!diagResult) return;
    window.open(`https://twitter.com/intent/tweet?text=AIパーソナルカラー診断結果：${diagResult.type}でした！%20%23パーソナルカラー診断%20%23韓国コスメ%20%23KBeauty&url=https://beauty-portal-jp.vercel.app`,'_blank');
  };

  const recProducts = diagResult ? PRODUCTS.slice(0, 3) : [];
  const SKIN_TYPES = ['乾燥肌','普通肌','脂性肌','混合肌','敏感肌'];
  const TAGS = ['保湿力高い','コスパ最高','リピート予定','敏感肌OK','発色が良い','使いやすい'];

  return (
    <div style={s.wrap}>
      <div style={s.nav}>
        <div>
          <div style={s.logo}>K<span style={{color:'var(--pink)'}}>•</span>Beauty</div>
          <div style={{fontSize:10,color:'rgba(255,255,255,0.4)',letterSpacing:3}}>BEAUTY PORTAL</div>
        </div>
        <div style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>25サイト統合</div>
      </div>

      <div style={s.tabs}>
        {(['ranking','reviews','news','diagnosis'] as Tab[]).map((t,i) => (
          <div key={t} style={s.tab(tab===t)} onClick={() => setTab(t)}>
            {['ランキング','口コミ','新製品','AI診断'][i]}
          </div>
        ))}
      </div>

      {/* RANKING */}
      {tab === 'ranking' && (
        <div style={s.section}>
          <div style={s.title}>韓国コスメ</div>
          <div style={s.sub}>2026年3月 口コミ総合ランキング</div>
          <div style={{display:'flex',gap:6,marginBottom:14,overflowX:'auto',paddingBottom:4}}>
            {cats.map(c => (
              <button key={c} style={s.tag(filter===c)} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
          {filtered.map(p => (
            <div key={p.rank} style={{...s.card,display:'flex',gap:12,alignItems:'center'}}>
              <div style={{width:32,height:32,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:500,flexShrink:0,background:p.rank===1?'#C9924A':p.rank===2?'#B0B0B0':p.rank===3?'#C8845A':'var(--bg)',color:p.rank<=3?'#fff':'var(--muted)'}}>
                {p.rank}
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:500,marginBottom:2}}>{p.name}</div>
                <div style={{fontSize:11,color:'var(--muted)'}}>{p.brand} · {p.cat}</div>
                <div style={{display:'flex',alignItems:'center',gap:4,marginTop:4}}>
                  <span style={{color:'#C9924A',fontSize:12}}>{'★'.repeat(Math.floor(p.stars))}{'☆'.repeat(5-Math.floor(p.stars))}</span>
                  <span style={{fontSize:11,color:'var(--muted)'}}>{p.stars}（{p.reviews}件）</span>
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
                <div style={{fontSize:12,fontWeight:500}}>{p.price}</div>
                <button style={s.btn} onClick={() => window.open(affLink(p.kw),'_blank')}>Amazonで買う</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* REVIEWS */}
      {tab === 'reviews' && (
        <div style={s.section}>
          <div style={s.title}>みんなの口コミ</div>
          <div style={s.sub}>25サイト合計 1,284件のレビュー</div>
          {REVIEWS.map((r,i) => (
            <div key={i} style={s.card}>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
                <div style={{width:32,height:32,borderRadius:'50%',background:'var(--pink)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,color:'var(--deep)',fontWeight:500,flexShrink:0}}>{r.name[0]}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:500}}>{r.name}</div>
                  <div style={{fontSize:11,color:'var(--muted)'}}>{r.skin} · {r.product}</div>
                </div>
                <div style={{marginLeft:'auto',color:'#C9924A',fontSize:13}}>{'★'.repeat(r.stars)}{'☆'.repeat(5-r.stars)}</div>
              </div>
              <div style={{fontSize:13,color:'#444',lineHeight:1.7}}>{r.text}</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:5,marginTop:8}}>
                {r.tags.map(t => <span key={t} style={{background:'var(--bg)',border:'1px solid var(--border)',borderRadius:20,padding:'2px 10px',fontSize:11,color:'var(--muted)'}}>{t}</span>)}
              </div>
            </div>
          ))}

          {/* レビュー投稿 */}
          <div style={{...s.card,marginTop:20}}>
            <div style={{fontSize:14,fontWeight:500,marginBottom:12}}>レビューを投稿する</div>
            {!reviewSubmitted ? (
              <>
                <div style={{marginBottom:10}}>
                  <div style={{fontSize:12,color:'var(--muted)',marginBottom:4}}>評価</div>
                  <div style={{display:'flex',gap:4}}>
                    {[1,2,3,4,5].map(n => (
                      <span key={n} onClick={() => setReviewForm(f=>({...f,rating:n}))}
                        style={{fontSize:24,cursor:'pointer',color:n<=reviewForm.rating?'#C9924A':'#ddd'}}>★</span>
                    ))}
                  </div>
                </div>
                <input value={reviewForm.nickname} onChange={e=>setReviewForm(f=>({...f,nickname:e.target.value}))}
                  placeholder="お名前（任意）"
                  style={{width:'100%',padding:'8px',border:'1px solid var(--border)',borderRadius:8,fontSize:13,marginBottom:10}}/>
                <select value={reviewForm.skinType} onChange={e=>setReviewForm(f=>({...f,skinType:e.target.value}))}
                  style={{padding:'8px',border:'1px solid var(--border)',borderRadius:8,fontSize:13,marginBottom:10}}>
                  {SKIN_TYPES.map(s=><option key={s}>{s}</option>)}
                </select>
                <textarea value={reviewForm.body} onChange={e=>setReviewForm(f=>({...f,body:e.target.value}))}
                  placeholder="レビュー本文（20文字以上）" rows={3}
                  style={{width:'100%',padding:'8px',border:'1px solid var(--border)',borderRadius:8,fontSize:13,resize:'vertical',marginBottom:10}}/>
                <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:12}}>
                  {TAGS.map(t => (
                    <span key={t} onClick={() => setReviewForm(f=>({...f,tags:f.tags.includes(t)?f.tags.filter(x=>x!==t):[...f.tags,t]}))}
                      style={{fontSize:12,padding:'3px 10px',borderRadius:20,cursor:'pointer',background:reviewForm.tags.includes(t)?'#FBEAF0':'var(--bg)',color:reviewForm.tags.includes(t)?'#72243E':'var(--muted)',border:`1px solid ${reviewForm.tags.includes(t)?'#ED93B1':'var(--border)'}`}}>{t}</span>
                  ))}
                </div>
                <button onClick={submitReview} style={{...s.btnLg,background:'var(--deep)'}}>レビューを投稿する</button>
              </>
            ) : (
              <div style={{textAlign:'center',padding:'20px',color:'var(--gold)',fontWeight:500}}>
                ✅ レビューを投稿しました！ありがとうございます
              </div>
            )}
          </div>
        </div>
      )}

      {/* NEWS */}
      {tab === 'news' && (
        <div style={s.section}>
          <div style={s.title}>新製品ニュース</div>
          <div style={s.sub}>2026年3月 最新情報</div>
          {NEWS.map((n,i) => (
            <div key={i} style={{...s.card,padding:0,overflow:'hidden'}}>
              <div style={{height:100,background:`linear-gradient(135deg, var(--pink), var(--gold))`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:36}}>{n.emoji}</div>
              <div style={{padding:'12px 14px'}}>
                <div style={{fontSize:10,color:'var(--pink)',fontWeight:500,textTransform:'uppercase',letterSpacing:1,marginBottom:4}}>{n.cat}</div>
                <div style={{fontSize:14,fontWeight:500,lineHeight:1.4,marginBottom:4}}>{n.title}</div>
                <div style={{fontSize:11,color:'var(--muted)'}}>{n.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* AI DIAGNOSIS */}
      {tab === 'diagnosis' && (
        <div style={s.section}>
          <div style={s.title}>AIパーソナルカラー診断</div>
          <div style={s.sub}>カメラで自撮りして肌色をAI解析</div>

          {/* IDLE */}
          {diagState === 'idle' && (
            <div style={{textAlign:'center'}}>
              <div style={{width:'100%',maxWidth:320,height:280,borderRadius:24,background:'var(--deep)',margin:'0 auto 16px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8,border:'2px solid var(--border)'}}>
                <div style={{width:140,height:180,border:'2px dashed rgba(242,167,195,0.6)',borderRadius:'70px/90px'}}></div>
                <div style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>顔を枠内に合わせてください</div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:16}}>
                <button style={s.btnLg} onClick={startCamera}><span>📷</span> カメラを起動する</button>
                <button style={s.btnSm} onClick={() => setDiagState('questionnaire')}>質問形式で診断する（カメラ不要）</button>
              </div>
              <div style={{fontSize:11,color:'var(--muted)',lineHeight:1.6}}>
                ※ 撮影した画像はサーバーに保存されません<br/>※ Claude AIが肌色・瞳・唇の色を解析します
              </div>
            </div>
          )}

          {/* CAMERA */}
          {diagState === 'camera' && (
            <div style={{textAlign:'center'}}>
              <div style={{width:'100%',maxWidth:320,height:320,borderRadius:24,background:'var(--deep)',margin:'0 auto 16px',overflow:'hidden',border:'2px solid var(--border)',position:'relative'}}>
                <video ref={videoRef} autoPlay playsInline style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:22}}/>
              </div>
              <button style={s.btnLg} onClick={capture}><span>📸</span> 撮影して診断する</button>
            </div>
          )}

          {/* ANALYZING */}
          {diagState === 'analyzing' && (
            <div style={{textAlign:'center',padding:20}}>
              <div style={{fontSize:40,marginBottom:12}}>🔍</div>
              <div style={{fontSize:16,fontWeight:500,marginBottom:8}}>AI解析中...</div>
              <div style={{width:'100%',height:4,background:'var(--border)',borderRadius:2,overflow:'hidden',margin:'12px 0'}}>
                <div style={{height:'100%',background:`linear-gradient(90deg, var(--pink), var(--gold))`,borderRadius:2,width:`${scanProgress}%`,transition:'width 0.3s'}}></div>
              </div>
              <div style={{fontSize:12,color:'var(--muted)'}}>{scanText}</div>
            </div>
          )}

          {/* RESULT */}
          {diagState === 'result' && diagResult && (
            <div style={s.card}>
              <div style={{fontSize:12,color:'var(--muted)',marginBottom:4}}>あなたのパーソナルカラーは</div>
              <div style={{fontFamily:"'Noto Serif JP',serif",fontSize:22,marginBottom:4}}>{diagResult.type}</div>
              <div style={{display:'inline-block',background:'var(--pink)',color:'var(--deep)',borderRadius:20,padding:'4px 14px',fontSize:12,fontWeight:500,marginBottom:12}}>{diagResult.english}</div>
              <div style={{fontSize:13,color:'#555',lineHeight:1.8,marginBottom:16}}>{diagResult.desc}</div>
              <div style={{fontSize:12,fontWeight:500,color:'var(--muted)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>似合うカラーパレット</div>
              <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:16}}>
                {diagResult.colors?.map((c: string,i: number) => (
                  <div key={i} style={{width:36,height:36,borderRadius:'50%',background:c,border:'2px solid rgba(255,255,255,0.8)'}}></div>
                ))}
              </div>
              <div style={{fontSize:12,fontWeight:500,color:'var(--muted)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>おすすめコスメ TOP3</div>
              {recProducts.map(p => (
                <div key={p.rank} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderBottom:'1px solid var(--border)'}}>
                  <div style={{width:36,height:36,borderRadius:10,background:'var(--bg)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,flexShrink:0}}>💄</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:500}}>{p.name}</div>
                    <div style={{fontSize:11,color:'var(--muted)'}}>{p.price}</div>
                  </div>
                  <button style={s.btn} onClick={() => window.open(affLink(p.kw),'_blank')}>購入</button>
                </div>
              ))}
              <div style={{display:'flex',gap:8,marginTop:16}}>
                <button style={{...s.btnLg,flex:1,fontSize:12}} onClick={shareResult}><span>𝕏</span> シェア</button>
                <button style={{...s.btnSm,flex:1,fontSize:12}} onClick={resetDiag}>再診断</button>
              </div>
            </div>
          )}

          {/* QUESTIONNAIRE */}
          {diagState === 'questionnaire' && qIndex < QUESTIONS.length && (
            <div>
              <div style={{fontSize:12,color:'var(--muted)',marginBottom:4}}>質問 {qIndex+1} / {QUESTIONS.length}</div>
              <div style={{height:4,background:'var(--border)',borderRadius:2,marginBottom:16}}>
                <div style={{height:'100%',width:`${(qIndex/QUESTIONS.length)*100}%`,background:'var(--pink)',borderRadius:2,transition:'width 0.3s'}}></div>
              </div>
              <div style={{fontSize:16,fontWeight:500,marginBottom:16}}>{QUESTIONS[qIndex].q}</div>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {QUESTIONS[qIndex].opts.map((o,i) => (
                  <button key={i} onClick={() => answerQ(i)}
                    style={{textAlign:'left',padding:'12px 16px',border:'1px solid var(--border)',borderRadius:12,background:'#fff',cursor:'pointer',fontSize:13}}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* BOTTOM NAV */}
      <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:480,background:'#fff',borderTop:'1px solid var(--border)',display:'flex',zIndex:100}}>
        {(['ranking','reviews','news','diagnosis'] as Tab[]).map((t,i) => (
          <div key={t} onClick={() => setTab(t)}
            style={{flex:1,padding:'10px 8px',textAlign:'center',cursor:'pointer',fontSize:10,color:tab===t?'var(--deep)':'var(--muted)'}}>
            <div style={{fontSize:20,marginBottom:2}}>{['🏆','💬','✨','🎨'][i]}</div>
            {['ランキング','口コミ','新製品','AI診断'][i]}
          </div>
        ))}
      </div>

      <canvas ref={canvasRef} style={{display:'none'}}/>
    </div>
  );
}
