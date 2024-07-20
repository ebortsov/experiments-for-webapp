import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Testing telegram bot...',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
