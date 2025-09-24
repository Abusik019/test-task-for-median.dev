/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { PostList } from '../components/PostList';
import { usePosts } from '../hooks/usePosts';
import Loader from '../components/Loader';
import { ErrorState } from '@/components/ErrorState';
import Head from 'next/head';

export default function Home() {
	const { data, isLoading, isSuccess, isError, error, refetch } = usePosts();

	if (isLoading) return <Loader />;
	if (isError) {
		const message =
			(error as any)?.status === 404
				? 'Ресурс не найден'
				: (error as any)?.message || 'Что-то пошло не так. Попробуйте ещё раз.';

		return (
			<ErrorState
				title="Не удалось загрузить посты"
				description={message}
				actionLabel="Повторить"
				onActionClick={() => refetch()}
			/>
		);
	}

	return (
		<>
			<Head>
				<title>Главная - Posts App</title>
			</Head>
			<div className="mt-20">{isSuccess && <PostList posts={data} />}</div>;
		</>
	);
}
