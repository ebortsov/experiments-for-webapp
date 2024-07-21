declare namespace Telegram {
    interface WebApp {
        ready: () => void;
        expand: () => void;
    }
}

interface Window {
    Telegram?: {
        WebApp: Telegram.WebApp;
    };
}
