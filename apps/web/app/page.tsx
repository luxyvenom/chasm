import Link from 'next/link'

import { Hero } from '@/components/marketing/hero'
import { ProductSections } from '@/components/marketing/sections'
import { Pill, Section } from '@/components/ui/shell'

export default function HomePage() {
  return (
    <main className="pb-20">
      <Section className="pt-6">
        <nav className="flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-5 py-4 shadow-[0_18px_50px_rgba(255,111,181,0.12)] backdrop-blur">
          <Link href="/" className="display-font text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
            CHASM
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
            <a href="#product">Product</a>
            <a href="#proof">Proof</a>
            <a href="#pricing">Pricing</a>
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <Link
            href="/onboarding"
            className="rounded-full border border-[var(--border-strong)] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--accent-strong)]"
          >
            Start Free
          </Link>
        </nav>
      </Section>
      <Hero />
      <div id="product">
        <ProductSections />
      </div>
      <Section id="pricing" className="pb-10">
        <div className="grid gap-6 rounded-[2.25rem] border border-[var(--border)] bg-[var(--panel-strong)] p-8 shadow-[0_24px_70px_rgba(255,111,181,0.18)] lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <Pill tone="accent">Pricing</Pill>
            <h2 className="display-font text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] lg:text-5xl">
              작은 팀도 바로 시작할 수 있는
              <br />
              캐릭터 IP 성장 워크스페이스
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
              검색어 조사, 경쟁 크리에이터 비교, 일본 확장 체크, 다음 액션 추천까지 한 화면에서
              정리합니다. 블로그나 감으로 결정하던 일을 데이터 루틴으로 바꾸는 데 초점을 맞췄습니다.
            </p>
          </div>
          <div className="rounded-[1.9rem] border border-[var(--border-strong)] bg-white/85 p-6 backdrop-blur">
            <p className="text-sm font-medium text-[var(--muted)]">MVP Plan</p>
            <p className="display-font mt-2 text-5xl font-semibold text-[var(--ink)]">₩9,900</p>
            <p className="mt-2 text-sm text-[var(--muted)]">VAT 별도 / 월간 구독</p>
            <div className="mt-6 space-y-2 text-sm text-[var(--ink-soft)]">
              <p>주간 키워드 스냅샷</p>
              <p>유사 크리에이터 벤치마크</p>
              <p>상품화 액션 가이드</p>
            </div>
            <Link
              href="/onboarding"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--ink-soft)]"
            >
              온보딩 시작
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
