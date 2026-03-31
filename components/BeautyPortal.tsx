'use client';
import { useState } from 'react';

const MOSHIMO_ID = '1184522';
const AT = 'haircolorab22-22';
const HP_URL = 'https://beauty.hotpepper.jp/slnH000501100/';

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

const NEWS = [
  {cat:'NEW',title:'rom&nd 2026春 新色リップ10色解禁',date:'Mar 30'},
  {cat:'TREND',title:'韓国発「グラスシン」メイクとは',date:'Mar 29'},
  {cat:'SALE',title:'Qoo10メガ割 4月開催 狙い目10選',date:'Mar 28'},
];

type Tab = 'ranking' | 'news' | 'diagnosis';

export default function BeautyPortal() {
  const [tab, setTab] = useState<Tab>('ranking');
  const [filter, setFilter] = useState('全て');

  const ql = {bg:'#FAFAF8',border:'#E8DDD8',text:'#2C2420',muted:'#9E8E86',hint:'#C4B5AD'};
  const cats = ['全て','スキンケア','リップ','日焼け止め'];
  const filtered = filter === '全て' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  return (
    <div style={{fontFamily:"'DM Mono',monospace",background:ql.bg,minHeight:'100vh',maxWidth:480,margin:'0 auto',paddingBottom:72}}>
      <div style={{background:ql.text,padding:'28px 24px 0',borderBottom:`0.5px solid ${ql.border}`}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'4px',color:'rgba(255,255,255,0.4)',marginBottom:6}}>K · BEAUTY PORTAL</div>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:400,color:'#fff',fontStyle:'italic',paddingBottom:16}}>
          {tab === 'ranking' ? '今週のランキング' : tab === 'news' ? '最新情報' : 'AI色彩診断'}
        </div>
      </div>

      <div style={{display:'flex',borderBottom:`0.5px solid ${ql.border}`}}>
        {(['ranking','news','diagnosis'] as Tab[]).map((t,i) => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex:1,padding:'10px 0',textAlign:'center',fontFamily:"'DM Mono',monospace",
            fontSize:9,letterSpacing:'2px',color:tab===t?ql.text:ql.hint,
            borderBottom:tab===t?`1px solid ${ql.text}`:'1px solid transparent',
            background:'transparent',border:'none',cursor:'pointer',
            borderBottomColor:tab===t?ql.text:'transparent',borderBottomWidth:1,borderBottomStyle:'solid'
          }}>
            {['RANKING','NEWS','DIAGNOSIS'][i]}
          </button>
        ))}
      </div>

      {tab === 'ranking' && (
        <div style={{padding:'0 24px'}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'3px',color:ql.hint,padding:'18px 0 10px',borderBottom:`0.5px solid ${ql.border}`}}>CATEGORY</div>
          <div style={{display:'flex',gap:8,padding:'12px 0',overflowX:'auto'}}>
            {cats.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                padding:'4px 14px',border:`0.5px solid ${filter===c?ql.text:ql.border}`,
                fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'1px',
                color:filter===c?'#fff':ql.hint,background:filter===c?ql.text:'transparent',
                whiteSpace:'nowrap',cursor:'pointer'
              }}>{c}</button>
            ))}
          </div>
          {filtered.map(p => (
            <div key={p.rank} style={{display:'flex',alignItems:'flex-start',gap:12,padding:'14px 0',borderBottom:`0.5px solid ${ql.border}`}}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:ql.hint,paddingTop:2,width:32,flexShrink:0}}>No.{String(p.rank).padStart(2,'0')}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:14,color:ql.text,lineHeight:1.3}}>{p.name}</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:ql.hint,marginTop:3}}>{p.brand} · {p.stars}★ ({p.reviews})</div>
                <button onClick={() => window.open(affLink(p.kw),'_blank')} style={{
                  fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'1px',padding:'4px 10px',
                  border:`0.5px solid ${ql.text}`,background:'transparent',color:ql.text,cursor:'pointer',marginTop:6
                }}>AMAZON →</button>
              </div>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:12,color:ql.text,fontWeight:500,paddingTop:2}}>{p.price}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'news' && (
        <div style={{padding:'0 24px'}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'3px',color:ql.hint,padding:'18px 0 10px',borderBottom:`0.5px solid ${ql.border}`}}>LATEST · 2026</div>
          {NEWS.map((n,i) => (
            <div key={i} style={{display:'flex',gap:12,alignItems:'baseline',padding:'16px 0',borderBottom:`0.5px solid ${ql.border}`}}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:1,color:ql.hint,width:36,flexShrink:0}}>{n.cat}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:14,color:ql.text,lineHeight:1.4}}>{n.title}</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:ql.hint,marginTop:4}}>{n.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'diagnosis' && (
        <div style={{padding:'24px'}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'3px',color:ql.hint,marginBottom:16}}>AI PERSONAL COLOUR ANALYSIS</div>
          <div style={{width:'100%',aspectRatio:'1',background:ql.text,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:8,marginBottom:16}}>
            <div style={{width:120,height:160,border:'0.5px dashed rgba(255,255,255,0.3)',borderRadius:'60px/80px'}}></div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:'rgba(255,255,255,0.4)',letterSpacing:2}}>ALIGN FACE</div>
          </div>
          <button style={{display:'block',width:'100%',padding:14,border:`0.5px solid ${ql.text}`,background:ql.text,fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'3px',color:'#fff',cursor:'pointer',marginBottom:8}}>
            OPEN CAMERA →
          </button>
          <button style={{display:'block',width:'100%',padding:14,border:`0.5px solid ${ql.border}`,background:'transparent',fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'3px',color:ql.muted,cursor:'pointer'}}>
            QUESTIONNAIRE →
          </button>
        </div>
      )}

      <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:480,background:'#fff',borderTop:`0.5px solid ${ql.border}`,display:'flex',zIndex:100}}>
        {(['ranking','news','diagnosis'] as Tab[]).map((t,i) => (
          <div key={t} onClick={() => setTab(t)} style={{flex:1,padding:'10px 8px',textAlign:'center',fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'1.5px',color:tab===t?ql.text:ql.hint,cursor:'pointer'}}>
            {['RANK','NEWS','AI'][i]}
          </div>
        ))}
      </div>
    </div>
  );
}
