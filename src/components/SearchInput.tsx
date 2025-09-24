interface Props {
	value: string;
	onChange: (v: string) => void;
	placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder }: Props) {
	return (
		<input
			className="border-b-2 border-[#2b7a78] px-3 py-2 w-full focus:outline-none"
			value={value}
			placeholder={placeholder || 'Поиск...'}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
}
