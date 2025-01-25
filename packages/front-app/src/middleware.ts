import { getCsrfToken } from "next-auth/react"

export const config = {
  matcher: ['/((?!auth|api).*)'],
  // matcher: ['/users'],
}

export { default } from 'next-auth/middleware'