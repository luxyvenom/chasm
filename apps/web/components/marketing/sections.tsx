import { ArrowUpRight, Coins, Compass, Layers3, Search, ShieldCheck } from 'lucide-react'

import { Pill, Section } from '@/components/ui/shell'

const pillars = [
  {
    icon: Search,
    title: '검색 기반 시장 탐색',
    body: '감성 키워드와 카테고리 조합을 묶어 어떤 흐름이 커지고 있는지 빠르게 파악합니다.',
  },
  {
    icon: Layers3,
    title: '유사 크리에이터 비교',
    body: '비슷한 톤의 계정, 상품 구성, 성장 패턴을 한 자리에서 비교해 방향을 정리합니다.',
  },
  {
    icon: Coins,
    title: '상품화 우선순위 제안',
    body: '굿즈, 콜라보, 콘텐츠 확장 중 무엇을 먼저 실험할지 액션 단위로 추천합니다.',
  },
  {
    icon: Compass,
    title: '일본 확장 진단',
    body: '검색 반응, 소개 문구, 카테고리 적합도를 보고 해외 확장 가설을 점검합니다.',
  },
]

const reasons = [
  '예쁜 리포트가 아니라 실제 실행 순서를 정리하는 제품 구조',
  '시장 언어와 경쟁 포지션을 함께 보여줘 팀 커뮤니케이션 비용이 낮음',
  '작은 브랜드도 바로 시도할 수 있게 입력과 해석 단계를 단순화',
]

const loopItems = [
  '감성 키워드와 고객군을 정의',
  '유사 사례와 상품 구성을 비교',
  '가장 가능성 높은 액션부터 테스트',
  '성과를 기반으로 다음 루프를 갱신',
]

export function ProductSections() {
  return (
    <>
      <Section className="pb-20">
        <div className="mb-8 flex items-center justify-between gap-6">
          <div className="space-y-3">
            <Pill>Product Core</Pill>
            <h2 className="display-font text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] lg:text-5xl">
              CHASM은 취향형 브랜드를 위한
              <br />
              성장 해석 도구입니다.
            </h2>
          </div>
          <div className="hidden rounded-full border border-[var(--border)] bg-white/60 px-5 py-3 text-sm font-medium text-[var(--muted)] lg:block">
            검색, 비교, 액션 추천을 하나로 묶었습니다
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="card-surface rounded-[1.85rem] border border-[var(--border)] p-6 shadow-[0_18px_40px_rgba(157,79,117,0.08)]"
            >
              <Icon className="mb-5 h-6 w-6 text-[var(--accent-2-strong)]" />
              <h3 className="mb-3 text-xl font-semibold text-[var(--ink)]">{title}</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section id="proof" className="pb-20">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-surface rounded-[2.2rem] border border-[var(--border)] p-7 shadow-[0_24px_70px_rgba(157,79,117,0.1)]">
            <Pill tone="accent">Why It Works</Pill>
            <h2 className="display-font mt-5 text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] lg:text-5xl">
              귀여운 브랜드는 더 정교하게,
              <br />
              작은 팀은 더 빠르게 움직여야 합니다.
            </h2>
            <div className="mt-8 grid gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-[var(--border)] bg-white/68 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-[var(--accent-2-strong)]" />
                  <p className="text-sm leading-6 text-[var(--ink)]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.2rem] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(255,239,186,0.92),rgba(255,216,234,0.92))] p-7 shadow-[0_24px_70px_rgba(255,111,181,0.12)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Monetization Loop</p>
            <div className="mt-5 space-y-4">
              {loopItems.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="display-font flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-sm text-white">
                    0{index + 1}
                  </div>
                  <p className="text-sm font-medium text-[var(--ink)]">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-white/70 bg-white/72 p-4">
              <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                <span>예상 실행 점수</span>
                <span className="font-semibold text-[var(--ink)]">23.8x</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/70">
                <div className="h-2 w-[78%] rounded-full bg-[linear-gradient(90deg,var(--accent-2),var(--accent))]" />
              </div>
              <a
                href="/dashboard"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2-strong)]"
              >
                샘플 대시보드 보기
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
