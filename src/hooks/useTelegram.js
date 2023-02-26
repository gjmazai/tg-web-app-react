const tg = window.Telegram.WebApp;

export function useTelegram() {
	const onClose = () => {
		tg.close();
	};

	const onToogleButton = () => {
		if (tg.MainButton.isVisble) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	};

	return {
		tg,
		user: tg.initDataUnsafe,
		onClose,
		onToogleButton,
	};
}
