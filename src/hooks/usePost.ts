import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../lib/api';

export function usePost(id: string | number) {
	return useQuery({
		queryKey: ['post', id],
		queryFn: () => fetchPost(id),
	});
}
