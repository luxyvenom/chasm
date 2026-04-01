import Link from 'next/link'

import { cn } from '@/lib/utils'

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section
      className={cn('mx-auto w-full max-w-7xl px-6 lg:px-10', className)}
      {...props}
    >
      {children}
    </section>
  )
}

export function Pill({
  children,
  tone = 'default',
}: {
  children: React.ReactNode
  tone?: 'default' | 'accent'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.14em] uppercase',
        tone === 'accent'
          ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100'
          : 'border-white/10 bg-white/5 text-slate-200',
      )}
    >
      {children}
    </span>
  )
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
    >
      {children}
    </Link>
  )
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      {children}
    </Link>
  )
}
