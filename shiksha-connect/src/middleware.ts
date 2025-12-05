import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-here-change-in-production";

// Define protected routes
const protectedRoutes = [
  '/dashboard',
  '/courses'
];

// Define admin-only routes
const adminRoutes = [
  '/admin/courses/create',
  '/admin/courses/[id]/edit',
  '/admin/courses/[id]/delete'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route needs protection
  const isProtectedRoute = protectedRoutes.some(route => {
    if (route.includes('[id]')) {
      const pattern = route.replace('[id]', '[^/]+');
      return new RegExp(`^${pattern}`).test(pathname);
    }
    return pathname.startsWith(route);
  });

  const isAdminRoute = adminRoutes.some(route => {
    if (route.includes('[id]')) {
      const pattern = route.replace('[id]', '[^/]+');
      return new RegExp(`^${pattern}`).test(pathname);
    }
    return pathname.startsWith(route);
  });

  if (isProtectedRoute || isAdminRoute) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      // No token found, redirect to login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET) as {
        id: number;
        email: string;
        name: string;
        role: string;
      };

      // Check if it's an admin-only route
      if (isAdminRoute && decoded.role !== 'admin') {
        // Not an admin, redirect to dashboard
        const dashboardUrl = new URL('/dashboard', request.url);
        return NextResponse.redirect(dashboardUrl);
      }

      // Add user info to headers for server components
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', decoded.id.toString());
      requestHeaders.set('x-user-role', decoded.role);
      requestHeaders.set('x-user-email', decoded.email);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      // Token is invalid or expired, redirect to login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
