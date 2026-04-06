import {
  ArrowRight,
  ChartNoAxesCombined,
  CirclePlay,
  Globe2,
  Sparkles,
} from 'lucide-react'

import { Pill, PrimaryButton, SecondaryButton, Section } from '@/components/ui/shell'

const highlights = [
  {
    icon: Globe2,
    title: 'Japan readiness',
    body: '일본 진출 전에 검색 반응과 확장 가능성을 먼저 확인합니다.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Benchmark instantly',
    body: '유사한 감성의 크리에이터와 상품화 흐름을 빠르게 비교합니다.',
  },
  {
    icon: Sparkles,
    title: 'Action prompts',
    body: '굿즈, 콜라보, 콘텐츠 실험 우선순위를 문장으로 정리합니다.',
  },
]

const statRows = [
  { label: 'Cute creator demand', value: '+42%' },
  { label: 'Expected merch fit', value: '78 / 100' },
  { label: 'Launch confidence', value: 'High' },
]

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      <div className="absolute left-[-4rem] top-8 h-36 w-36 rounded-full bg-[rgba(255,217,87,0.45)] blur-3xl" />
      <div className="absolute right-[-3rem] top-24 h-44 w-44 rounded-full bg-[rgba(255,111,181,0.28)] blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <Pill tone="accent">Character Market Intelligence SaaS</Pill>
          <div className="space-y-5">
            <h1 className="display-font max-w-4xl text-5xl leading-[0.92] font-semibold tracking-[-0.05em] text-[var(--ink)] lg:text-7xl">
              귀여운 IP를
              <br />
              감이 아니라 흐름으로 키우는 법
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] lg:text-lg">
              CHASM은 캐릭터와 크리에이터 브랜드를 위한 시장 해석 레이어입니다. 검색 반응,
              유사 사례, 상품화 우선순위를 한 장의 워크보드처럼 묶어 다음 액션을 빠르게 결정하게
              만듭니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/onboarding">무료로 시작</PrimaryButton>
            <SecondaryButton href="/dashboard">데모 보기</SecondaryButton>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-surface rounded-[1.75rem] border border-[var(--border)] p-4 shadow-[0_18px_40px_rgba(157,79,117,0.08)]"
              >
                <Icon className="mb-4 h-5 w-5 text-[var(--accent-2-strong)]" />
                <h2 className="mb-2 text-sm font-semibold text-[var(--ink)]">{title}</h2>
                <p className="text-sm leading-6 text-[var(--muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_top,rgba(255,217,87,0.28),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,111,181,0.22),transparent_30%)] blur-2xl" />
          <div className="card-surface rounded-[2.4rem] border border-[var(--border)] p-5 shadow-[0_30px_80px_rgba(157,79,117,0.14)]">
            <div className="mb-5 rounded-[1.9rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,243,205,0.95),rgba(255,225,239,0.92))] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    Weekly Snapshot
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--ink)]">
                    Soft cute creator pack
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
                    20대 여성 취향군에서 반응이 커지는 조합을 추적하고, 다음 실험을 추천합니다.
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                  Top signal
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {statRows.map(({ label, value }) => (
                  <div key={label} className="rounded-2xl border border-white/70 bg-white/65 p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-[var(--ink)]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--cream)] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[var(--ink-soft)]">Merch fit score</p>
                  <CirclePlay className="h-4 w-4 text-[var(--accent-2-strong)]" />
                </div>
                <p className="display-font mt-3 text-5xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                  82
                </p>
                <div className="mt-5 h-3 rounded-full bg-white/70">
                  <div className="h-3 w-[82%] rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" />
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  핑크 포인트와 옐로우 포장을 같이 쓰는 굿즈군의 반응이 높게 나타났습니다.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-[var(--border)] bg-white/72 p-5">
                <p className="text-sm font-medium text-[var(--ink-soft)]">Next actions</p>
                <div className="mt-4 space-y-3">
                  {[
                    '키링 + 스티커 번들 테스트',
                    '릴스 썸네일 컬러를 파스텔 핑크로 통일',
                    '일본향 소개 문구를 1줄 CTA로 단순화',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3"
                    >
                      <span className="display-font flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-[var(--ink)]">
                        0{index + 1}
                      </span>
                      <p className="text-sm text-[var(--ink)]">{item}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="/dashboard"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2-strong)]"
                >
                  전체 대시보드 보기
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
