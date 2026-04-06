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
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase',
        tone === 'accent'
          ? 'border-[var(--border-strong)] bg-[rgba(255,255,255,0.64)] text-[var(--ink)]'
          : 'border-[var(--border)] bg-white/60 text-[var(--ink-soft)]',
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
      className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--ink-soft)]"
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
      className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/55 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/80"
    >
      {children}
    </Link>
  )
}
