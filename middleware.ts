import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { NextURL } from 'next/dist/server/web/next-url';

export async function middleware(req: NextRequest) {
    const { pathname, searchParams } = new NextURL(req.url);
    const isAdminPath = pathname.startsWith('/admin');
    console.log(pathname);
    if (!isAdminPath) {
        return NextResponse.next();
    }

    const sessionToken = req.cookies.get('session_token');

    if (sessionToken) {
        // add normal session check
        return NextResponse.next();
    }

    const param1 = searchParams.get('param1');
    const param2 = searchParams.get('param2');

    if (param1 && param2 && param1 == param2) {
        // Generate code1 using the map from url parameters and compare code1 === code
        // Parameters are valid, set session and allow access
        const response = NextResponse.next();
        response.cookies.set('session_token', 'simple-session-token', {
            httpOnly: true,
            path: '/',
            secure: false, // Set to true for HTTPS
        });
        return response;
    }

    // Invalid parameters or no session, redirect to root
    return NextResponse.redirect(new URL('/', req.url));
}

// Define which paths to apply the middleware to
export const config = {
    matcher: ['/admin/:path*'], // Apply middleware to all /admin paths
};
