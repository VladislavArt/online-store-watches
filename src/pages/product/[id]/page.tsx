interface Props {
	params: Promise<{id: string}>
}

export async function Product ({ params }: Props) {
	const { id } = await params

	return <div>Watch Number: {id}</div>
}
