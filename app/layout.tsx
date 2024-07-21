export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Testing Telegram Bot</title>
                <meta name="description" content="Testing Telegram Bot" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://telegram.org/js/telegram-web-app.js" defer></script>
            </head>
            <body>{children}</body>
        </html>
    );
}
