import { useEffect } from "react";
import "./App.css";
import Button from "./Button/Button";
import Header from "./Header/Header";
const tg = window.Telegram.WebApp;

function App() {
	useEffect(() => {
		tg.ready();
	}, []);

	const onClose = () => {
		tg.close();
	};
	return (
		<div className="App">
			<Header tg={tg} />
			<Button onClick={onClose}>Закрыть</Button>
		</div>
	);
}

export default App;

