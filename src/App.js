import { useEffect } from "react";
import "./App.css";
import Button from "./Button/Button";
import Header from "./Header/Header";
import { useTelegram } from "./hooks/useTelegram";

function App() {
	const { tg, onToogleButton } = useTelegram();

	useEffect(() => {
		tg.ready();
	});

	return (
		<div className="App">
			<Header tg={tg} />
			<Button>Закрыть</Button>
			<button onClick={onToogleButton}>Toogle</button>
		</div>
	);
}

export default App;

