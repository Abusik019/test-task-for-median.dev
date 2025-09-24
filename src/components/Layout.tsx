'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	const isHome = pathname === '/',
		isSearch = pathname === '/search';

	return (
		<div className="min-h-screen">
			<header className="bg-[#3aafa9] border-b-4 border-[#2b7a78]">
				<nav className="max-w-4xl mx-auto h-14 flex items-center">
					<div
						className={`h-full min-w-[92px] px-4 box-border flex items-center justify-center ${isHome ? 'bg-[#2b7a78] font-medium' : 'bg-transparent'}`}
					>
						<Link href="/" className="text-white">
							Главная
						</Link>
					</div>
					<div
						className={`h-full min-w-[92px] px-4 box-border flex items-center justify-center ${isSearch ? 'bg-[#2b7a78] font-medium' : 'bg-transparent'}`}
					>
						<Link href="/search" className="text-white">
							Поиск
						</Link>
					</div>
				</nav>
			</header>
			<main className="relative max-w-4xl mx-auto p-4">{children}</main>
		</div>
	);
}
