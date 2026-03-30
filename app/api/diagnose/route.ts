import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json();
    const base64Data = image.replace(/^data:image\/[a-z]+;base64,/, '');

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image',
            source: { type: 'base64', media_type: 'image/jpeg', data: base64Data }
          },
          {
            type: 'text',
            text: `この顔写真からパーソナルカラーを診断してください。
以下のJSON形式のみで回答してください（説明文は不要）：
{
  "type": "イエベ春 / イエベ秋 / ブルベ夏 / ブルベ冬 のいずれか",
  "english": "Spring Warm / Autumn Warm / Summer Cool / Winter Cool のいずれか",
  "desc": "診断結果の説明（100文字以内）",
  "colors": ["#hex1","#hex2","#hex3","#hex4","#hex5","#hex6"],
  "keywords": ["キーワード1","キーワード2","キーワード3"],
  "lipColor": "おすすめリップカラー名",
  "foundation": "おすすめファンデーション系統"
}`
          }
        ]
      }]
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';
    const clean = text.replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);
    return NextResponse.json({ success: true, result });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
