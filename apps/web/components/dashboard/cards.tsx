import { ArrowUpRight, BellRing, Coins, Crown, SearchCheck, Sparkles } from 'lucide-react'

import { actionCards, roiCards, similarCharacters } from '@/lib/data'

export function DashboardHeader() {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
          CHASM Dashboard
        </p>
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="display-font text-4xl font-semibold tracking-[-0.04em] text-white">
              무해한 힐링 캐릭터의 시장 포지션
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              선택 키워드 기준으로 한국 검색량, 일본 반응, 유사 캐릭터 성장 흐름,
              수익화 액션을 한 화면에서 확인합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
            추천 액션: 에코백 MVP + 라인 스티커 탐색
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
        {roiCards.map((card) => (
          <div
            key={card.label}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(117,167,255,0.16),rgba(117,167,255,0.04))] p-6"
          >
            <p className="text-sm text-slate-300">{card.label}</p>
            <p className="display-font mt-3 text-4xl font-semibold text-white">
              {card.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{card.hint}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SimilarCharacterTable() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 backdrop-blur">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm text-slate-300">
            <Crown className="h-4 w-4 text-[var(--warning)]" />
            유사 캐릭터 랭킹 & 경쟁 현황
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            내 타겟과 겹치는 경쟁 캐릭터
          </h2>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
          카카오 · 인스타 기준
        </span>
      </div>
      <div className="space-y-3">
        {similarCharacters.map((character) => (
          <div
            key={character.name}
            className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 lg:grid-cols-[1.2fr_1fr_auto_auto]"
          >
            <div>
              <p className="text-lg font-semibold text-white">{character.name}</p>
              <p className="mt-1 text-sm text-slate-400">{character.overlap}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <SearchCheck className="h-4 w-4 text-[var(--accent)]" />
              인게이지먼트 {character.engagement}
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-white">
              랭킹 {character.rank}위
            </div>
            <div className="rounded-full bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
              {character.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AlertCard() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,216,111,0.16),rgba(255,216,111,0.04))] p-6">
      <p className="flex items-center gap-2 text-sm text-slate-900">
        <BellRing className="h-4 w-4" />
        급상승 알림
      </p>
      <p className="mt-4 text-2xl font-semibold text-slate-950">
        Mochi Letter가 150위에서 80위로 상승했습니다.
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-900/75">
        힐링, 위로, 20대 여성 타겟이 겹치는 캐릭터가 빠르게 상승 중입니다. 감성
        키워드의 시장 타이밍이 들어오고 있다는 의미입니다.
      </p>
    </div>
  )
}

export function ActionCoachCards() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 backdrop-blur">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm text-slate-300">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" />
            AI 수익화 코치
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            지금 무엇을 만들면 되는지 제안합니다.
          </h2>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
          ROI 중심 액션
        </span>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        {actionCards.map((card, index) => (
          <article
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-[var(--accent)]">
              {index === 0 ? <Coins className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
            </div>
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{card.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
