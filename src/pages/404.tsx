import Head from 'next/head';
import { ErrorState } from '../components/ErrorState';

export default function NotFoundPage() {
	return (
		<>
			<Head>
				<title>404 - Posts App</title>
			</Head>
			<main className="px-4">
				<ErrorState
					title="Страница не найдена"
					description="Похоже, такой страницы не существует."
				/>
			</main>
		</>
	);
}
