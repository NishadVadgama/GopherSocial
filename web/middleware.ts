import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

export function middleware(req: NextRequest) {
  // Get hostname of request (e.g. demo.acme.com, demo.localhost:3000)
  const hostname = req.headers
    .get('host')!
    .replace('.localhost:3000', `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  // // If root domain, then don't redirect
  // if (
  //   ['localhost:3000', process.env.NEXT_PUBLIC_ROOT_DOMAIN].includes(hostname)
  // ) {
  //   return NextResponse.next();
  // }

  console.log('hostname', hostname);

  // redirect to root domain if pathname includes /sites/
  if (req.nextUrl.pathname.includes('/sites/')) {
    return NextResponse.redirect(
      new URL(`/`, req.url)
    );
  }

  // If business domain, then redirect to /sites/[domain]
  if (hostname.includes('.acme.com')) {
    return NextResponse.rewrite(
      new URL(`/sites/${hostname.split('.')[0]}`, req.url)
    );
  }

  return NextResponse.next();

  // // If business domain, then don't redirect
  // if (hostname.includes('.acme.com')) {
  //   return NextResponse.next();
  // }

  // const token = req.cookies.get('token')?.value;

  // // protected routes
  // const protectedRoutes = ['/dashboard'];

  // if (protectedRoutes.some((route) => req.nextUrl.pathname.includes(route))) {
  //   if (!token) {
  //     return NextResponse.redirect(
  //       new URL('/login?referer=' + req.nextUrl.pathname, req.url)
  //     );
  //   }
  // }
}
