import { ActionCoachCards, AlertCard, DashboardHeader, SimilarCharacterTable } from '@/components/dashboard/cards'
import { DemographicChart, RelatedKeywordChart, TrendChart } from '@/components/dashboard/charts'

function WidgetFrame({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 backdrop-blur">
      <p className="text-sm text-slate-300">{subtitle}</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default function DashboardPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-6 px-6 py-8 lg:px-10">
      <DashboardHeader />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <WidgetFrame
          title="한일 트렌드 교차 그래프"
          subtitle="위젯 A · 네이버 & 구글 트렌드"
        >
          <TrendChart />
        </WidgetFrame>
        <WidgetFrame
          title="실제 유입 데모그래픽"
          subtitle="위젯 A · 연령대 / 성별 분포"
        >
          <DemographicChart />
        </WidgetFrame>
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <WidgetFrame
          title="연관 검색어 현황"
          subtitle="위젯 A · 상품화 신호"
        >
          <RelatedKeywordChart />
        </WidgetFrame>
        <AlertCard />
      </div>
      <SimilarCharacterTable />
      <ActionCoachCards />
    </main>
  )
}
