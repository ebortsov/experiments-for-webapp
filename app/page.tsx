'use client';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('Normal');
    useEffect(() => {
        if (typeof window === 'undefined') {
            setMessage('Undefined');
            return;
        }
        if (!window.Telegram) {
            setMessage('No Telegram');
            return;
        }
        if (!window.Telegram.WebApp) {
            setMessage('No WebApp');
            return;
        }
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }, []);

    return (
        <main>
            <h1>{message}</h1>
        </main>
    );
}
