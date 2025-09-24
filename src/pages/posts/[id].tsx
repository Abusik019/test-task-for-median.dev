import { fetchPost } from '../../lib/api';
import { Post as PostType } from '../../types/post';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const id = ctx.params?.id as string;

	try {
		const post = await fetchPost(id);

		return { props: { post } };
	} catch (e) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if ((e as any)?.status === 404) return { notFound: true };
		return { props: { post: null } };
	}
};

interface PostProps {
	post: PostType | null;
}

export default function Post({ post }: PostProps) {
	if (!post) return <p className="text-xl text-center mt-40">Пост не найден.</p>;

	return (
		<article className="bg-white p-6 rounded mt-20 border border-[#2b7a78]">
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.body.slice(0, 120)} />
			</Head>
			<h1 className="text-3xl font-bold mb-4">{post.title}</h1>
			<p className="leading-relaxed whitespace-pre-wrap">{post.body}</p>
			<Link
				href="/"
				className="absolute top-0 -left-30 inline-block mt-6 text-blue-600 hover:underline"
			>
				← На главную
			</Link>
		</article>
	);
}
