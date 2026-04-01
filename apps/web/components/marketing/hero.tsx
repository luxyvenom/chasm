import { ArrowRight, ChartNoAxesCombined, Globe2, Sparkles } from 'lucide-react'

import { Pill, PrimaryButton, SecondaryButton, Section } from '@/components/ui/shell'

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-7">
          <Pill tone="accent">Character Market Intelligence SaaS</Pill>
          <div className="space-y-5">
            <h1 className="display-font max-w-4xl text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-white lg:text-7xl">
              감이 아니라 데이터로,
              <br />
              캐릭터 IP의 수익 방향을 정합니다.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 lg:text-lg">
              CHASM은 키워드 기반 데이터 조회, 유사 캐릭터 비교, AI 수익화 코치,
              한일 크로스보더 인사이트를 한 화면에 묶어 크리에이터의 다음 액션을
              제안합니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/onboarding">온보딩 시작</PrimaryButton>
            <SecondaryButton href="/dashboard">대시보드 미리보기</SecondaryButton>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: Globe2,
                title: '한일 크로스보더',
                body: '네이버, 구글, 플랫폼 랭킹을 묶어 일본 진출 가능성을 진단합니다.',
              },
              {
                icon: ChartNoAxesCombined,
                title: '유사 캐릭터 비교',
                body: '같은 감성, 같은 타겟, 같은 카테고리의 경쟁 캐릭터를 자동 비교합니다.',
              },
              {
                icon: Sparkles,
                title: 'AI 수익화 코치',
                body: '굿즈, 스티커, 콜라보의 우선순위를 행동 단위로 추천합니다.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <Icon className="mb-4 h-5 w-5 text-[var(--accent)]" />
                <h2 className="mb-2 text-sm font-semibold text-white">{title}</h2>
                <p className="text-sm leading-6 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(143,247,204,0.24),transparent_34%),radial-gradient(circle_at_bottom,rgba(117,167,255,0.24),transparent_28%)] blur-2xl" />
          <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Live Snapshot
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  오늘의 캐릭터 시장 포지션
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                20대 여성 타겟
              </span>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(117,167,255,0.18),rgba(117,167,255,0.04))] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">일본 잠재력 지수</p>
                    <p className="display-font mt-2 text-4xl font-semibold text-white">
                      75
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
                    ROI +23.8x
                  </div>
                </div>
                <div className="mt-5 h-3 rounded-full bg-white/10">
                  <div className="h-3 w-3/4 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['급상승 유사 캐릭터', 'Mochi Letter +34'],
                  ['추천 액션', '에코백 MVP 테스트'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
              <a
                href="/dashboard"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]"
              >
                대시보드 전체 보기
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
