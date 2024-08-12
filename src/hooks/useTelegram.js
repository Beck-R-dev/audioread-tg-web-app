const tgWebApp = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tgWebApp.close()
    }

    const onToggleButton = () => {
        if(tgWebApp.MainButton.isVisible) {
            tgWebApp.MainButton.hide();
        } else {
            tgWebApp.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tgWebApp,
        user: tgWebApp.initDataUnsafe?.user,
    }
}