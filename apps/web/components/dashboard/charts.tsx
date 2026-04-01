'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { demographicSeries, trendSeries } from '@/lib/data'

const pieColors = ['#8ff7cc', '#75a7ff', '#ffd86f', '#ff9277']

export function TrendChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={trendSeries}>
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
        <XAxis dataKey="month" stroke="#8ea2c8" />
        <YAxis stroke="#8ea2c8" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#081120',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
          }}
        />
        <Line
          type="monotone"
          dataKey="korea"
          stroke="#8ff7cc"
          strokeWidth={3}
          dot={{ fill: '#8ff7cc' }}
        />
        <Line
          type="monotone"
          dataKey="japan"
          stroke="#75a7ff"
          strokeWidth={3}
          dot={{ fill: '#75a7ff' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function DemographicChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={demographicSeries}
          dataKey="value"
          nameKey="label"
          innerRadius={56}
          outerRadius={88}
          paddingAngle={4}
        >
          {demographicSeries.map((entry, index) => (
            <Cell key={entry.label} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#081120',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export function RelatedKeywordChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart
        data={[
          { keyword: '에코백', growth: 40 },
          { keyword: '스티커', growth: 22 },
          { keyword: '키링', growth: 6 },
          { keyword: '다이어리', growth: 18 },
        ]}
      >
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
        <XAxis dataKey="keyword" stroke="#8ea2c8" />
        <YAxis stroke="#8ea2c8" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#081120',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
          }}
        />
        <Bar dataKey="growth" fill="#8ff7cc" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
