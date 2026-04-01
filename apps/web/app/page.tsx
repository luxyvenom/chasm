import Link from 'next/link'

import { Hero } from '@/components/marketing/hero'
import { ProductSections } from '@/components/marketing/sections'
import { Pill, Section } from '@/components/ui/shell'

export default function HomePage() {
  return (
    <main className="pb-16">
      <Section className="pt-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <Link href="/" className="display-font text-xl font-semibold tracking-[-0.04em]">
            CHASM
          </Link>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <Link
            href="/onboarding"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white"
          >
            Start
          </Link>
        </nav>
      </Section>
      <Hero />
      <div id="product">
        <ProductSections />
      </div>
      <Section id="pricing" className="pb-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(52,211,154,0.14),rgba(52,211,154,0.03))] p-8 lg:flex lg:items-end lg:justify-between">
          <div className="space-y-4">
            <Pill tone="accent">Pricing</Pill>
            <h2 className="display-font text-3xl font-semibold tracking-[-0.03em] text-white lg:text-5xl">
              월 9,900원으로
              <br />
              감이 아니라 근거를 남깁니다.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              검색 트렌드, 유사 캐릭터 랭킹, AI 액션 추천, 일본 잠재력 지표를 한
              곳에서 확인하고 다음 수익화 우선순위를 빠르게 결정합니다.
            </p>
          </div>
          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6 lg:mt-0 lg:w-[360px]">
            <p className="text-sm text-slate-400">MVP Plan</p>
            <p className="display-font mt-2 text-5xl font-semibold text-white">₩9,900</p>
            <p className="mt-2 text-sm text-slate-400">VAT 별도 / 월간 구독</p>
            <Link
              href="/onboarding"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950"
            >
              온보딩 시작
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
