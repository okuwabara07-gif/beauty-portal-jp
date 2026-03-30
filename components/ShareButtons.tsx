'use client';

const PORTAL_URL = 'https://beauty-portal-jp.vercel.app';

interface ShareButtonsProps {
  diagType: string;
  diagEn: string;
}

export default function ShareButtons({ diagType, diagEn }: ShareButtonsProps) {
  const shareText = `AIパーソナルカラー診断結果：${diagType}でした！\n似合う韓国コスメをチェック👇\n#パーソナルカラー診断 #韓国コスメ #KBeauty #AIカラー診断`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(PORTAL_URL);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${shareText}\n\n${PORTAL_URL}`
      );
      alert('リンクをコピーしました！\nInstagram・TikTokのプロフィール欄にペーストしてください。');
    } catch {
      const el = document.createElement('textarea');
      el.value = `${shareText}\n\n${PORTAL_URL}`;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('コピーしました！');
    }
  };

  const ql = {
    text: '#2C2420', border: '#E8DDD8', hint: '#9E8E86',
  };

  const btnBase = {
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    gap: 8,
    padding: '12px',
    border: `0.5px solid ${ql.border}`,
    background: 'transparent',
    fontFamily: "'DM Mono', monospace",
    fontSize: 9,
    letterSpacing: '2px',
    cursor: 'pointer',
    flex: 1,
    transition: 'all 0.2s',
  };

  return (
    <div>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 9,
        letterSpacing: '3px',
        color: ql.hint,
        marginBottom: 12,
      }}>
        SHARE YOUR RESULT
      </div>

      {/* X + LINE 横並び */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        {/* X (Twitter) */}
        <button
          style={{ ...btnBase, color: '#000', borderColor: '#000' }}
          onClick={() => window.open(
            `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
            '_blank'
          )}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.638 5.903-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          SHARE ON X
        </button>

        {/* LINE */}
        <button
          style={{ ...btnBase, color: '#06C755', borderColor: '#06C755' }}
          onClick={() => window.open(
            `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`,
            '_blank'
          )}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          SHARE ON LINE
        </button>
      </div>

      {/* Instagram / TikTok コピー */}
      <button
        style={{
          ...btnBase,
          width: '100%',
          color: ql.hint,
          borderColor: ql.border,
          marginBottom: 8,
        }}
        onClick={copyLink}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
        </svg>
        COPY FOR INSTAGRAM · TIKTOK
      </button>

      {/* ヒントテキスト */}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 8,
        letterSpacing: '1px',
        color: ql.hint,
        lineHeight: 1.8,
        marginTop: 4,
      }}>
        INSTAGRAM · TIKTOK → COPY LINK & PASTE TO BIO OR STORY
      </div>
    </div>
  );
}
