interface InvitePageProps {
	params: {
		slug: string
	}
}

export default function InvitePage({ params }: InvitePageProps) {
	return (
		<div>
			<span>{params.slug}</span>
		</div>
	)
}
