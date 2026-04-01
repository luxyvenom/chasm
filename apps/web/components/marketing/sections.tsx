import { ArrowUpRight, Coins, Compass, Layers3, Search, ShieldCheck } from 'lucide-react'

import { Pill, Section } from '@/components/ui/shell'

const pillars = [
  {
    icon: Search,
    title: '키워드 선택 기반 시장 조회',
    body: '세계관과 감성 키워드를 기준으로 검색량, 데모그래픽, 연관 검색어를 한 화면에서 확인합니다.',
  },
  {
    icon: Layers3,
    title: '유사 캐릭터 자동 비교',
    body: '같은 감성과 타겟을 공유하는 캐릭터를 묶어 랭킹과 인게이지먼트의 차이를 보여줍니다.',
  },
  {
    icon: Coins,
    title: 'AI 수익화 코치',
    body: '굿즈, 이모티콘, 콜라보의 우선순위를 시장 데이터와 함께 액션 문장으로 제안합니다.',
  },
  {
    icon: Compass,
    title: '한일 진출 판단',
    body: '한국 검색 트렌드와 일본 반응 지표를 함께 보며 확장 적합도를 판단합니다.',
  },
]

const reasons = [
  '검색 트렌드만 보여주는 툴이 아니라 “그래서 무엇을 만들지”를 추천',
  '유사 캐릭터 랭킹 변화로 시장의 움직임을 빠르게 포착',
  '한일 시장을 동시에 보는 크로스보더 관점',
]

export function ProductSections() {
  return (
    <>
      <Section className="pb-20">
        <div className="mb-8 flex items-center justify-between gap-6">
          <div className="space-y-3">
            <Pill>Product Core</Pill>
            <h2 className="display-font text-3xl font-semibold tracking-[-0.03em] text-white lg:text-5xl">
              CHASM MVP는 네 가지 질문에 답합니다.
            </h2>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 lg:block">
            월 9,900원으로 시장 파악과 액션 추천까지
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <Icon className="mb-5 h-6 w-6 text-[var(--accent)]" />
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-7 text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pb-20">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-7 backdrop-blur">
            <Pill tone="accent">Creator Value</Pill>
            <h2 className="display-font mt-5 text-3xl font-semibold tracking-[-0.03em] text-white lg:text-5xl">
              편리한 정보 도구가 아니라
              <br />
              수익화 파트너처럼 보이게 설계합니다.
            </h2>
            <div className="mt-8 grid gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
                  <p className="text-sm leading-6 text-slate-200">{reason}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(143,247,204,0.14),rgba(143,247,204,0.04))] p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Monetization Loop
            </p>
            <div className="mt-5 space-y-4">
              {[
                '키워드와 타겟으로 시장을 정의',
                '유사 캐릭터와 랭킹 변화 비교',
                '굿즈, 스티커, 콜라보 우선순위 제안',
                'ROI와 일본 잠재력으로 결제 전환',
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="display-font flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm text-[var(--accent)]">
                    0{index + 1}
                  </div>
                  <p className="text-sm text-slate-100">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>예상 수익 회수</span>
                <span className="font-semibold text-white">23.8x</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[78%] rounded-full bg-[linear-gradient(90deg,var(--accent),#fef08a)]" />
              </div>
              <a
                href="/dashboard"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]"
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
