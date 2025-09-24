import Link from 'next/link';

type Props = {
	title: string;
	description?: string;
	actionLabel?: string;
	actionHref?: string;
	onActionClick?: () => void;
};

export function ErrorState({
	title,
	description,
	actionLabel = 'Повторить',
	actionHref,
	onActionClick,
}: Props) {
	return (
		<section className="mx-auto mt-20 max-w-xl text-center border rounded p-6">
			<h1 className="text-2xl font-semibold mb-2">{title}</h1>
			{description && <p className="text-gray-600 mb-6">{description}</p>}

			{onActionClick ? (
				<button
					type="button"
					onClick={onActionClick}
					className="inline-block rounded bg-[#2b7a78] px-4 py-2 text-white hover:opacity-90 transition"
				>
					{actionLabel}
				</button>
			) : actionHref ? (
				<Link
					href={actionHref}
					className="inline-block rounded bg-[#2b7a78] px-4 py-2 text-white hover:opacity-90 transition"
				>
					{actionLabel}
				</Link>
			) : null}
		</section>
	);
}
