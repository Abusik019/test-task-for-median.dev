/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { PostList } from '../components/PostList';
import { SearchInput } from '../components/SearchInput';
import Loader from '../components/Loader';
import { ErrorState } from '../components/ErrorState';
import Head from 'next/head';

export default function SearchPage() {
	const { data: posts, isLoading, isError, error, refetch } = usePosts();
	const [raw, setRaw] = useState('');
	const [query, setQuery] = useState('');

	useEffect(() => {
		const id = setTimeout(() => setQuery(raw.trim().toLowerCase()), 300);
		return () => clearTimeout(id);
	}, [raw]);

	const filtered = useMemo(() => {
		if (!posts) return [];
		if (!query) return posts;
		return posts.filter((p) => p.title.toLowerCase().includes(query));
	}, [posts, query]);

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
				<title>Поиск - Posts App</title>
			</Head>
			<div className="mt-10">
				<SearchInput
					value={raw}
					onChange={setRaw}
					placeholder="Введите часть заголовка..."
				/>
				{isLoading && <Loader />}
				{!isLoading && filtered.length > 0 && <PostList posts={filtered} />}
				{!isLoading && filtered.length === 0 && (
					<p className="text-gray-500 text-center mt-40">Ничего не найдено.</p>
				)}
			</div>
		</>
	);
}
