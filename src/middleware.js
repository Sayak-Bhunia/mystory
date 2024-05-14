import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === '/signin' ||
    path === '/signup' ||
    path === '/about' ||
    path === '/docs' ||
    path === '/faqs';

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/signin',
    '/signup',
    '/about',
    '/confess',
    '/docs',
    '/faqs',
    '/search',
    '/',
  ],
};
