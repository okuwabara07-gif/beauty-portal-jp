import { NextRequest, NextResponse } from 'next/server';

const RESULTS = [
  {
    type: 'イエベ春', english: 'Spring Warm',
    desc: '明るく透明感のある肌色。コーラル・ピーチ系が最もお似合いです。',
    colors: ['#F4A460','#FF8C69','#FFD700','#DEB887','#F08080','#FFDAB9'],
    keywords: ['明るい','透明感','暖かみ'],
  },
  {
    type: 'ブルベ夏', english: 'Summer Cool',
    desc: 'ソフトで落ち着いた印象。ラベンダー・ローズ系が最もお似合いです。',
    colors: ['#C8A2C8','#FFB6C1','#E0B0FF','#98A0D8','#DDA0DD','#F5E6FA'],
    keywords: ['柔らかい','上品','涼やか'],
  },
];

export async function POST(req: NextRequest) {
  try {
    const idx = Math.floor(Math.random() * RESULTS.length);
    return NextResponse.json({ success: true, result: RESULTS[idx] });
  } catch {
    return NextResponse.json({ success: false, error: 'error' }, { status: 500 });
  }
}
