'use client';
import ShareButtons from './ShareButtons';
import { useState, useRef, useCallback } from 'react';

const SUPABASE_URL = "https://ofplelhbmbueetvqxppt.supabase.co";
const SUPABASE_KEY = "sb_publishable_KPZnAxrvulyK4jfxZbYjjQ_8qD3FAXX";
const MOSHIMO_ID = "1184522";
const AT = "haircolorab22-22";

function affLink(kw: string) {
  return `https://af.moshimo.com/af/c/click?a_id=${MOSHIMO_ID}&p_id=170&pc_id=185&pl_id=4062&url=${encodeURIComponent('https://www.amazon.co.jp/s?k='+kw+'&tag='+AT)}`;
}

const PRODUCTS = [
  {rank:1,name:'COSRX スネイルムチンエッセンス',brand:'COSRX',cat:'スキンケア',price:'¥1,980',stars:4.8,reviews:128,kw:'COSRX スネイルムチン'},
  {rank:2,name:'rom&nd ジューシーラスティングティント',brand:'rom&nd',cat:'リップ',price:'¥1,650',stars:4.7,reviews:96,kw:'romand リップ'},
  {rank:3,name:'LANEIGE リップスリーピングマスク',brand:'LANEIGE',cat:'リップ',price:'¥2,200',stars:4.6,reviews:84,kw:'LANEIGE リップ'},
  {rank:4,name:'innisfree グリーンティーシード美容液',brand:'innisfree',cat:'スキンケア',price:'¥3,300',stars:4.5,reviews:72,kw:'innisfree 美容液'},
  {rank:5,name:'Anessa パーフェクトUV',brand:'Anessa',cat:'日焼け止め',price:'¥2,750',stars:4.4,reviews:61,kw:'Anessa UV'},
];

const REVIEWS = [
  {name:'さくら',skin:'乾燥肌',product:'COSRX スネイルムチン',stars:5,text:'2週間で肌のモチモチ感が変わりました。テクスチャーはすぐ浸透し、コスパも最高です。',tags:['保湿力高い','コスパ最高']},
  {name:'ゆみ',skin:'敏感肌',product:'LANEIGE リップマスク',stars:4,text:'敏感肌でも刺激なく使えました。寝起きのリップが驚くほどプルプルに。',tags:['敏感肌OK','リップケア']},
  {name:'まい',skin:'普通肌',product:'innisfree 美容液',stars:4,text:'緑茶の香りが心地よく、肌のトーンが明るくなった気がします。',tags:['自然派','美白効果']},
];

const NEWS = [
  {cat:'NEW',title:'rom&nd 2026春 新色リップ10色解禁',date:'Mar 30'},
  {cat:'TREND',title:'韓国発「グラスシン」メイクとは',date:'Mar 29'},
  {cat:'SALE',title:'Qoo10メガ割 4月開催 狙い目10選',date:'Mar 28'},
];

const QUESTIONS = [
  {q:'日焼けをするとどうなりますか？',opts:['赤くなって剥ける','黒くなる','あまり変わらない','赤→後から黒']},
  {q:'瞳の色に近いのは？',opts:['ライトブラウン','ダークブラウン','グレイがかった茶','こげ茶・赤み']},
  {q:'血管の色は？',opts:['緑・黄緑','青・紫','わからない','緑と青が混在']},
  {q:'似合うアクセサリーは？',opts:['ゴールド','シルバー','どちらも','どちらも苦手']},
  {q:'肌のトーンは？',opts:['明るいベージュ','暗めのオークル','白め・ピンク','黄みが強い']},
];

const DIAG_RESULTS = [
  {type:'イエベ春',en:'Spring Warm',desc:'明るく透明感のある肌色。コーラル・ピーチ系が最もお似合いです。',colors:['#F4A460','#FF8C69','#FFD700','#DEB887','#F08080','#FFDAB9']},
  {type:'イエベ秋',en:'Autumn Warm',desc:'深みのある落ち着いた肌色。ブラウン・テラコッタ系が最もお似合いです。',colors:['#8B4513','#D2691E','#CD853F','#A0522D','#DEB887','#F4A460']},
  {type:'ブルベ夏',en:'Summer Cool',desc:'ソフトで落ち着いた印象。ラベンダー・ローズ系が最もお似合いです。',colors:['#C8A2C8','#FFB6C1','#E0B0FF','#98A0D8','#DDA0DD','#F5E6FA']},
  {type:'ブルベ冬',en:'Winter Cool',desc:'クールで高コントラスト。ビビッドカラーやモノトーンが最もお似合いです。',colors:['#DC143C','#4169E1','#000080','#C0C0C0','#8B0000','#191970']},
];

type Tab = 'ranking'|'reviews'|'news'|'diagnosis';
type DiagState = 'idle'|'camera'|'analyzing'|'result'|'questionnaire';

export default function BeautyPortal() {
  const [tab, setTab] = useState<Tab>('ranking');
  const [filter, setFilter] = useState('全て');
  const [diagState, setDiagState] = useState<DiagState>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [scanText, setScanText] = useState('');
  const [diagResult, setDiagResult] = useState<any>(null);
  const [qIndex, setQIndex] = useState(0);
  const [revForm, setRevForm] = useState({rating:5,nickname:'',skinType:'乾燥肌',body:'',tags:[] as string[]});
  const [revDone, setRevDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream|null>(null);

  const cats = ['全て','スキンケア','リップ','日焼け止め'];
  const filtered = filter==='全て' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===filter);
  const SKIN_TYPES = ['乾燥肌','普通肌','脂性肌','混合肌','敏感肌'];
  const TAGS = ['保湿力高い','コスパ最高','リピート予定','敏感肌OK','発色が良い'];

  // Quiet Luxury カラーパレット
  const ql = {
    bg: '#FAFAF8', surface: '#fff', border: '#E8DDD8',
    text: '#2C2420', muted: '#9E8E86', hint: '#C4B5AD',
    accent: '#2C2420',
  };

  const startCamera = useCallback(async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'},audio:false});
      streamRef.current = s;
      if(videoRef.current){videoRef.current.srcObject=s;videoRef.current.style.display='block';}
      setDiagState('camera');
    } catch { setDiagState('questionnaire'); }
  },[]);

  const capture = useCallback(async () => {
    if(!videoRef.current||!canvasRef.current) return;
    const v=videoRef.current, c=canvasRef.current;
    c.width=v.videoWidth||320; c.height=v.videoHeight||320;
    c.getContext('2d')?.drawImage(v,0,0);
    streamRef.current?.getTracks().forEach(t=>t.stop());
    v.style.display='none'; c.style.display='block';
    setDiagState('analyzing');
    const steps:Array<[number,string]> = [[20,'肌色を解析しています..'],[45,'アンダートーンを判定中..'],[70,'パーソナルカラーを算出中..'],[100,'診断完了']];
    for(const [p,t] of steps){ await new Promise(r=>setTimeout(r,800)); setScanProgress(p); setScanText(t); }
    await new Promise(r=>setTimeout(r,400));
    try {
      const img = c.toDataURL('image/jpeg',0.8);
      const res = await fetch('/api/diagnose',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({image:img})});
      const d = await res.json();
      setDiagResult(d.success ? d.result : DIAG_RESULTS[0]);
    } catch { setDiagResult(DIAG_RESULTS[0]); }
    setDiagState('result');
  },[]);

  const answerQ = (i:number) => {
    if(qIndex>=QUESTIONS.length-1){ setDiagResult(DIAG_RESULTS[i%4]); setDiagState('result'); }
    else setQIndex(q=>q+1);
  };

  const submitReview = async () => {
    if(revForm.body.length<20){alert('20文字以上入力してください');return;}
    try { await fetch(`${SUPABASE_URL}/rest/v1/reviews`,{method:'POST',headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify({site_id:'beauty-portal-jp',product_name:'全般',rating:revForm.rating,skin_type:revForm.skinType,body:revForm.body,nickname:revForm.nickname||'匿名',tags:revForm.tags})}); } catch{}
    setRevDone(true);
  };

  const shareResult = () => {
    if(!diagResult) return;
    const txt = encodeURIComponent(`パーソナルカラー診断結果：${diagResult.type}でした！\n似合う韓国コスメをチェック👇\n#パーソナルカラー診断 #韓国コスメ #KBeauty`);
    window.open(`https://twitter.com/intent/tweet?text=${txt}&url=${encodeURIComponent('https://beauty-portal-jp.vercel.app')}`,'_blank');
  };
  const _shareResult_orig = () => {
    if(!diagResult) return;
    const txt = encodeURIComponent(`パーソナルカラー診断結果：${diagResult.type}でした！\n似合うコスメをチェック👇\n#パーソナルカラー診断 #韓国コスメ #KBeauty`);
    window.open(`https://twitter.com/intent/tweet?text=${txt}&url=${encodeURIComponent('https://beauty-portal-jp.vercel.app')}`,'_blank');
  };

  const resetDiag = () => { setDiagState('idle'); setDiagResult(null); setScanProgress(0); setQIndex(0); if(canvasRef.current) canvasRef.current.style.display='none'; };

  // ── Quiet Luxury スタイル定義
  const F = {
    wrap: {fontFamily:''DM Mono', 'Playfair Display', serif',background:ql.bg,minHeight:'100vh',maxWidth:480,margin:'0 auto',paddingBottom:72},
    header: {padding:'28px 24px 0',borderBottom:`0.5px solid ${ql.border}`},
    eyebrow: {fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:'4px',color:ql.hint,marginBottom:6},
    title: {fontFamily:''Playfair Display',serif',fontSize:26,fontWeight:400,color:ql.text,fontStyle:'italic',lineHeight:1.2,paddingBottom:16},
    tabs: {display:'flex',borderBottom:`0.5px solid ${ql.border}`},
    tab: (a:boolean)=>({flex:1,padding:'10px 0',textAlign:'center' as const,fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:'2px',color:a?ql.text:ql.hint,borderBottom:a?`1px solid ${ql.text}`:`1px solid transparent`,cursor:'pointer',transition:'all 0.2s',background:'transparent',border:'none',borderBottomColor:a?ql.text:'transparent',borderBottomWidth:1,borderBottomStyle:'solid' as const}),
    sec: {padding:'0 24px'},
    secTitle: {fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:'3px',color:ql.hint,padding:'18px 0 10px',borderBottom:`0.5px solid ${ql.border}`},
    filterRow: {display:'flex',gap:8,padding:'12px 0',overflowX:'auto' as const},
    chip: (a:boolean)=>({padding:'4px 14px',border:`0.5px solid ${a?ql.text:ql.border}`,borderRadius:0,fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:'1px',color:a?ql.text:ql.hint,cursor:'pointer',background:a?ql.text:'transparent',whiteSpace:'nowrap' as const}),
    chipText: (a:boolean)=>({color:a?'#fff':ql.hint}),
    rankRow: {display:'flex',alignItems:'flex-start',gap:12,padding:'14px 0',borderBottom:`0.5px solid ${ql.border}`},
    rankNum: {fontFamily:''DM Mono',monospace',fontSize:9,color:ql.hint,letterSpacing:1,paddingTop:2,width:32,flexShrink:0},
    rankName: {fontFamily:''Playfair Display',serif',fontSize:14,color:ql.text,lineHeight:1.3},
    rankMeta: {fontFamily:''DM Mono',monospace',fontSize:9,color:ql.hint,marginTop:3},
    rankPrice: {fontFamily:''DM Mono',monospace',fontSize:12,color:ql.text,fontWeight:500,marginLeft:'auto',flexShrink:0,paddingTop:2},
    buyBtn: {fontFamily:''DM Mono',monospace',fontSize:8,letterSpacing:'1px',padding:'4px 10px',border:`0.5px solid ${ql.text}`,background:'transparent',color:ql.text,cursor:'pointer',marginTop:6,display:'block'},
    divider: {height:'0.5px',background:ql.border,margin:'0'},
    ctaBtn: {display:'block',width:'100%',padding:'14px',border:`0.5px solid ${ql.text}`,background:'transparent',fontFamily:''DM Mono',monospace',fontSize:10,letterSpacing:'3px',color:ql.text,cursor:'pointer',textAlign:'center' as const,marginTop:20},
    ctaBtnSolid: {display:'block',width:'100%',padding:'14px',border:`0.5px solid ${ql.text}`,background:ql.text,fontFamily:''DM Mono',monospace',fontSize:10,letterSpacing:'3px',color:'#fff',cursor:'pointer',textAlign:'center' as const,marginTop:8},
    nav: {display:'flex',background:ql.surface,borderTop:`0.5px solid ${ql.border}`,padding:'10px 0'},
    navItem: (a:boolean)=>({flex:1,textAlign:'center' as const,fontFamily:''DM Mono',monospace',fontSize:8,letterSpacing:'1.5px',color:a?ql.text:ql.hint,cursor:'pointer',padding:'6px 0'}),
    cameraFrame: {width:'100%',aspectRatio:'1',background:ql.text,border:`0.5px solid ${ql.border}`,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column' as const,gap:8,position:'relative' as const,overflow:'hidden' as const,marginBottom:16},
    scanBar: {height:'0.5px',background:ql.border,margin:'10px 0',position:'relative' as const,overflow:'hidden' as const},
    scanFill: (p:number)=>({position:'absolute' as const,inset:0,background:ql.text,width:`${p}%`,transition:'width 0.3s'}),
  };

  return (
    <div style={F.wrap}>
      {/* HEADER */}
      <div style={F.header}>
        <div style={F.eyebrow}>K · BEAUTY PORTAL</div>
        <div style={F.title}>
          {tab==='ranking'?'今週のランキング':tab==='reviews'?'みんなの口コミ':tab==='news'?'最新情報':'AI色彩診断'}
        </div>
      </div>

      {/* TABS */}
      <div style={F.tabs}>
        {(['ranking','reviews','news','diagnosis'] as Tab[]).map((t,i)=>(
          <button key={t} style={F.tab(tab===t)} onClick={()=>setTab(t)}>
            {['RANKING','REVIEW','NEWS','DIAGNOSIS'][i]}
          </button>
        ))}
      </div>

      {/* RANKING */}
      {tab==='ranking' && (
        <div style={F.sec}>
          <div style={F.secTitle}>CATEGORY</div>
          <div style={F.filterRow}>
            {cats.map(c=>(
              <button key={c} style={{...F.chip(filter===c)}} onClick={()=>setFilter(c)}>
                <span style={F.chipText(filter===c)}>{c}</span>
              </button>
            ))}
          </div>
          {filtered.map(p=>(
            <div key={p.rank} style={F.rankRow}>
              <div style={F.rankNum}>No.{String(p.rank).padStart(2,'0')}</div>
              <div style={{flex:1}}>
                <div style={F.rankName}>{p.name}</div>
                <div style={F.rankMeta}>{p.brand} · {p.cat} · {p.stars}★ ({p.reviews})</div>
                <button style={F.buyBtn} onClick={()=>window.open(affLink(p.kw),'_blank')}>AMAZON →</button>
              </div>
              <div style={F.rankPrice}>{p.price}</div>
            </div>
          ))}
          <button style={F.ctaBtnSolid} onClick={()=>setTab('diagnosis')}>AI COLOUR DIAGNOSIS →</button>
        </div>
      )}

      {/* REVIEWS */}
      {tab==='reviews' && (
        <div style={F.sec}>
          <div style={F.secTitle}>COMMUNITY · 1,284 REVIEWS</div>
          {REVIEWS.map((r,i)=>(
            <div key={i} style={{padding:'16px 0',borderBottom:`0.5px solid ${ql.border}`}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:6}}>
                <div style={{fontFamily:''Playfair Display',serif',fontSize:13,fontStyle:'italic',color:ql.text}}>{r.name}</div>
                <div style={{fontFamily:''DM Mono',monospace',fontSize:9,color:ql.hint}}>{r.skin} · {'★'.repeat(r.stars)}</div>
              </div>
              <div style={{fontFamily:''DM Mono',monospace',fontSize:9,color:ql.hint,marginBottom:6,letterSpacing:1}}>{r.product}</div>
              <div style={{fontSize:13,color:ql.muted,lineHeight:1.8}}>{r.text}</div>
              <div style={{display:'flex',flexWrap:'wrap' as const,gap:4,marginTop:8}}>
                {r.tags.map(t=><span key={t} style={{fontFamily:''DM Mono',monospace',fontSize:8,letterSpacing:1,padding:'2px 8px',border:`0.5px solid ${ql.border}`,color:ql.hint}}>{t}</span>)}
              </div>
            </div>
          ))}
          {/* 投稿フォーム */}
          <div style={{padding:'20px 0'}}>
            <div style={F.secTitle}>LEAVE A REVIEW</div>
            {!revDone ? (
              <div style={{paddingTop:12}}>
                <div style={{marginBottom:10}}>
                  <div style={{fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:2,color:ql.hint,marginBottom:6}}>RATING</div>
                  <div style={{display:'flex',gap:6}}>
                    {[1,2,3,4,5].map(n=>(
                      <span key={n} onClick={()=>setRevForm(f=>({...f,rating:n}))}
                        style={{fontSize:20,cursor:'pointer',color:n<=revForm.rating?ql.text:ql.border}}>★</span>
                    ))}
                  </div>
                </div>
                <input value={revForm.nickname} onChange={e=>setRevForm(f=>({...f,nickname:e.target.value}))}
                  placeholder="NAME (OPTIONAL)"
                  style={{width:'100%',padding:'8px 0',border:'none',borderBottom:`0.5px solid ${ql.border}`,background:'transparent',fontFamily:''DM Mono',monospace',fontSize:10,letterSpacing:1,color:ql.text,outline:'none',marginBottom:12}}/>
                <select value={revForm.skinType} onChange={e=>setRevForm(f=>({...f,skinType:e.target.value}))}
                  style={{width:'100%',padding:'8px 0',border:'none',borderBottom:`0.5px solid ${ql.border}`,background:'transparent',fontFamily:''DM Mono',monospace',fontSize:10,letterSpacing:1,color:ql.text,outline:'none',marginBottom:12,appearance:'none' as const}}>
                  {SKIN_TYPES.map(s=><option key={s}>{s}</option>)}
                </select>
                <textarea value={revForm.body} onChange={e=>setRevForm(f=>({...f,body:e.target.value}))}
                  placeholder="YOUR REVIEW (20+ CHARS)" rows={3}
                  style={{width:'100%',padding:'8px 0',border:'none',borderBottom:`0.5px solid ${ql.border}`,background:'transparent',fontFamily:''DM Mono',monospace',fontSize:10,letterSpacing:1,color:ql.text,outline:'none',resize:'none' as const,marginBottom:12}}/>
                <div style={{display:'flex',flexWrap:'wrap' as const,gap:6,marginBottom:16}}>
                  {TAGS.map(t=>(
                    <span key={t} onClick={()=>setRevForm(f=>({...f,tags:f.tags.includes(t)?f.tags.filter(x=>x!==t):[...f.tags,t]}))}
                      style={{fontFamily:''DM Mono',monospace',fontSize:8,letterSpacing:1,padding:'3px 10px',border:`0.5px solid ${revForm.tags.includes(t)?ql.text:ql.border}`,color:revForm.tags.includes(t)?ql.text:ql.hint,cursor:'pointer',background:revForm.tags.includes(t)?'rgba(44,36,32,0.05)`:'transparent'}}>{t}</span>
                  ))}
                </div>
                <button onClick={submitReview} style={F.ctaBtnSolid}>SUBMIT REVIEW →</button>
              </div>
            ) : (
              <div style={{padding:'20px 0',fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:2,color:ql.muted}}>
                REVIEW SUBMITTED · THANK YOU
              </div>
            )}
          </div>
        </div>
      )}

      {/* NEWS */}
      {tab==='news' && (
        <div style={F.sec}>
          <div style={F.secTitle}>LATEST · 2026</div>
          {NEWS.map((n,i)=>(
            <div key={i} style={{padding:'16px 0',borderBottom:`0.5px solid ${ql.border}`,display:'flex',gap:12,alignItems:'baseline'}}>
              <div style={{fontFamily:''DM Mono',monospace',fontSize:8,letterSpacing:1,color:ql.hint,width:36,flexShrink:0}}>{n.cat}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:''Playfair Display',serif',fontSize:14,color:ql.text,lineHeight:1.4}}>{n.title}</div>
                <div style={{fontFamily:''DM Mono',monospace',fontSize:8,color:ql.hint,marginTop:4,letterSpacing:1}}>{n.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DIAGNOSIS */}
      {tab==='diagnosis' && (
        <div style={F.sec}>
          {diagState==='idle' && (
            <div style={{paddingTop:12}}>
              <div style={F.secTitle}>PERSONAL COLOUR ANALYSIS</div>
              <div style={{...F.cameraFrame,marginTop:16}}>
                <div style={{width:120,height:160,border:`0.5px dashed rgba(255,255,255,0.3)`,borderRadius:'60px/80px'}}></div>
                <div style={{fontFamily:''DM Mono',monospace',fontSize:9,color:'rgba(255,255,255,0.4)',letterSpacing:2,marginTop:8}}>ALIGN FACE</div>
              </div>
              <button style={F.ctaBtnSolid} onClick={startCamera}>OPEN CAMERA →</button>
              <button style={F.ctaBtn} onClick={()=>setDiagState('questionnaire')}>QUESTIONNAIRE →</button>
              <div style={{fontFamily:''DM Mono',monospace',fontSize:8,color:ql.hint,letterSpacing:1,marginTop:12,lineHeight:2}}>
                IMAGE NOT STORED · AI POWERED BY CLAUDE
              </div>
            </div>
          )}

          {diagState==='camera' && (
            <div style={{paddingTop:12}}>
              <div style={{...F.cameraFrame}}>
                <video ref={videoRef} autoPlay playsInline style={{width:'100%',height:'100%',objectFit:'cover' as const,display:'none'}}/>
                <canvas ref={canvasRef} style={{width:'100%',height:'100%',objectFit:'cover' as const,display:'none'}}/>
              </div>
              <button style={F.ctaBtnSolid} onClick={capture}>CAPTURE & ANALYSE →</button>
            </div>
          )}

          {diagState==='analyzing' && (
            <div style={{paddingTop:24}}>
              <div style={{fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:3,color:ql.hint,marginBottom:16}}>ANALYSING</div>
              <div style={F.scanBar}><div style={F.scanFill(scanProgress)}></div></div>
              <div style={{fontFamily:''DM Mono',monospace',fontSize:9,color:ql.hint,letterSpacing:1,marginTop:8}}>{scanText}</div>
            </div>
          )}

          {diagState==='result' && diagResult && (
            <div style={{paddingTop:12}}>
              <div style={F.secTitle}>YOUR RESULT</div>
              <div style={{padding:'20px 0',borderBottom:`0.5px solid ${ql.border}`}}>
                <div style={{fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:3,color:ql.hint,marginBottom:8}}>PERSONAL COLOUR</div>
                <div style={{fontFamily:''Playfair Display',serif',fontSize:28,fontStyle:'italic',color:ql.text,marginBottom:4}}>{diagResult.type}</div>
                <div style={{fontFamily:''DM Mono',monospace',fontSize:10,letterSpacing:2,color:ql.hint,marginBottom:16}}>{diagResult.english||diagResult.en}</div>
                <div style={{fontSize:13,color:ql.muted,lineHeight:1.8,marginBottom:16}}>{diagResult.desc}</div>
                <div style={{fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:2,color:ql.hint,marginBottom:8}}>YOUR PALETTE</div>
                <div style={{display:'flex',gap:6,marginBottom:20}}>
                  {(diagResult.colors||[]).map((c:string,i:number)=>(
                    <div key={i} style={{width:32,height:32,background:c,border:`0.5px solid ${ql.border}`}}></div>
                  ))}
                </div>
                <div style={{fontFamily:''DM Mono',monospace',fontSize:9,letterSpacing:2,color:ql.hint,marginBottom:10}}>RECOMMENDED</div>
                {PRODUCTS.slice(0,3).map(p=>(
                  <div key={p.rank} style={{display:'flex',alignItems:'baseline',gap:8,padding:'8px 0',borderBottom:`0.5px solid ${ql.border}`}}>
                    <div style={{fontFamily:''DM Mono',monospace',fontSize:9,color:ql.hint,width:28}}>0{p.rank}</div>
                    <div style={{flex:1,fontSize:12,color:ql.text}}>{p.name}</div>
                    <div style={{fontFamily:''DM Mono',monospace',fontSize:10,color:ql.text}}>{p.price}</div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex',gap:8,marginTop:16}}>
                <button style={{...F.ctaBtnSolid,flex:1,marginTop:0}} onClick={shareResult}>SHARE ON X →</button>
                <button style={{...F.ctaBtn,flex:1,marginTop:0}} onClick={resetDiag}>RETRY</button>
              </div>
            </div>
          )}

          {diagState==='questionnaire' && qIndex<QUESTIONS.length && (
            <div style={{paddingTop:12}}>
              <div style={F.secTitle}>QUESTION {qIndex+1} / {QUESTIONS.length}</div>
              <div style={{height:'0.5px',background:ql.text,width:`${((qIndex)/QUESTIONS.length)*100}%`,transition:'width 0.3s',marginBottom:20,marginTop:4}}></div>
              <div style={{fontFamily:''Playfair Display',serif',fontSize:16,fontStyle:'italic',color:ql.text,marginBottom:16,lineHeight:1.5}}>{QUESTIONS[qIndex].q}</div>
              <div style={{display:'flex',flexDirection:'column' as const,gap:8}}>
                {QUESTIONS[qIndex].opts.map((o,i)=>(
                  <button key={i} onClick={()=>answerQ(i)}
                    style={{padding:'12px 14px',border:`0.5px solid ${ql.border}`,background:'transparent',textAlign:'left' as const,fontFamily:''DM Mono',monospace',fontSize:10,letterSpacing:1,color:ql.muted,cursor:'pointer'}}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* BOTTOM NAV */}
      <div style={{...F.nav,position:'fixed' as const,bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:480,zIndex:100}}>
        {(['ranking','reviews','news','diagnosis'] as Tab[]).map((t,i)=>(
          <div key={t} style={F.navItem(tab===t)} onClick={()=>setTab(t)}>
            {['RANK','REVIEW','NEWS','AI'][i]}
          </div>
        ))}
      </div>
      <canvas ref={canvasRef} style={{display:'none'}}/>
    </div>
  );
}
