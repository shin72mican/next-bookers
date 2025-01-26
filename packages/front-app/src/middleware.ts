export const config = {
  matcher: ['/((?!auth|api).*)'],
  // matcher: ['/users'],
}

export { default } from 'next-auth/middleware'