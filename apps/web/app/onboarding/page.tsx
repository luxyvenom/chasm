import { onboardingKeywords } from '@/lib/data'

export default function OnboardingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 lg:px-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">CHASM Setup</p>
        <h1 className="display-font mt-4 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
          캐릭터 IP의 기준점을 먼저 정의합니다.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          이 설정이 이후 대시보드의 키워드 조회, 유사 캐릭터 비교, 수익화 추천의
          기준이 됩니다.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">기본 정보</h2>
          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">캐릭터 이름</span>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="예: Chasm Bunny"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">캐릭터 한 줄 소개</span>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="예: 무해한 위로를 전하는 힐링 토끼"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">타겟 데모그래픽</span>
              <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none">
                <option>20대 여성</option>
                <option>1020 여성</option>
                <option>30대 직장인</option>
                <option>한일 팬덤 혼합</option>
              </select>
            </label>
          </div>
        </section>
        <section className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">세계관 및 감성 키워드</h2>
          <p className="mt-2 text-sm text-slate-400">
            아래 키워드는 검색 트렌드와 유사 캐릭터 매칭의 기준으로 사용됩니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {onboardingKeywords.map((keyword, index) => (
              <button
                key={keyword}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  index < 4
                    ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                {keyword}
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(117,167,255,0.14),rgba(117,167,255,0.04))] p-5">
            <p className="text-sm text-slate-300">선택 결과 예시</p>
            <p className="mt-3 text-lg font-semibold text-white">
              힐링 · 위로 · 귀여움 · 무해함
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              이 조합으로 네이버 검색 추이, 일본 반응, 유사 캐릭터 그룹, 굿즈 추천
              우선순위를 생성합니다.
            </p>
          </div>
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950">
            대시보드 생성
          </button>
        </section>
      </div>
    </main>
  )
}
