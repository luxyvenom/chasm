import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'

import { prisma } from '@/lib/prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  secret: process.env.BETTER_AUTH_SECRET || 'dev-secret',
  baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  trustedOrigins: process.env.BETTER_AUTH_TRUSTED_ORIGINS?.split(',') || [
    'http://localhost:3000',
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    },
  },
})
