'use client';

import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
    useEffect(() => {
        let tg = window.Telegram.WebApp; 
        tg.expand(); //расширяем на все окно
    }, []);


    return (
        <main>
            <h1>Fuck telegram</h1>
        </main>
    );
}
