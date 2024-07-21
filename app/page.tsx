'use client';

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        if (!window.Telegram) {
            return;
        }
        if (!window.Telegram.WebApp) {
            return;
        }
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }, []);


    return (
        <main>
            <h1>Fuck telegram</h1>
        </main>
    );
}
