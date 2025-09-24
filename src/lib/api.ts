/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Post } from '../types/post';

export const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 10000,
});

export const fetchPosts = async (): Promise<Post[]> => {
	try {
		const { data } = await api.get<Post[]>('/posts');
		return data;
	} catch (e) {
		(e as any).status = (e as any)?.response?.status;
		throw e;
	}
};

export const fetchPost = async (id: string | number): Promise<Post> => {
	try {
		const { data } = await api.get<Post>(`/posts/${id}`);
		return data;
	} catch (e) {
		(e as any).status = (e as any)?.response?.status;
		throw e;
	}
};
