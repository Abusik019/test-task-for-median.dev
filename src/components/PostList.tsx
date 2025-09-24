"use client";

import { Post } from '../types/post';
import { PostItem } from './PostItem';

export function PostList({ posts }: { posts: Post[] }) {
	return (
		<ul className="mt-10 grid grid-cols-3 gap-4">
			{posts.map((p) => (
				<PostItem key={p.id} post={p} />
			))}
		</ul>
	);
}
