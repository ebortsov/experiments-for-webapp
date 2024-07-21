"use client"
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Check if the script is loaded and the Telegram object is available
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    } else {
        console.log("Well that sucks");
    }
  }, []);

  return (
    <main>
      <h1>This page is used for testing telegram bot</h1>
    </main>
  );
}
