import useUpdateParams from '@/shared/lib/hooks/useUpdateParams'

export function ButtonReset() {
	const { resetFilters, isPending } = useUpdateParams()

	return (
		<button
			onClick={resetFilters}
			className="
				mt-8 w-full p-4 border-2 border-secondary bg-transparent outline-none cursor-pointer transition-all duration-300 ease-in-out
				hover:bg-primary hover:text-white hover:border-primary
			"
			disabled={isPending}
		>
			{isPending ? 'Loading...' : 'RESET FILTER'}
		</button>
	)
}
