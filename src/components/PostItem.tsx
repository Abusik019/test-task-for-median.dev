"use client";

import Link from 'next/link';
import { Post } from '../types/post';
import { truncate } from '../utils/truncate';

export function PostItem({ post }: { post: Post }) {
	return (
		<li className="border border-[#17252a] rounded p-4 bg-[#def2f1] hover:shadow-2xl transition flex flex-col items-start justify-between">
			<Link
				href={`/posts/${post.id}`}
				className="text-black font-semibold text-lg mb-2 w-fit transition-colors hover:text-[#2b7a78]"
			>
				{post.title}
			</Link>
			<p className="text-sm text-gray-600 leading-snug">{truncate(post.body, 100)}</p>
		</li>
	);
}
