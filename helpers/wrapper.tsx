import {
	Html,
	Head,
	Body,
	Container,
	Section,
	Hr,
	Text,
} from "@react-email/components"
import * as React from "react"

import { container, heading, hr, main, paragraphContent } from "./styles"

type Props = {
	footer: React.ReactNode
	logo: React.ReactNode
	children?: React.ReactNode
	title?: string
}

export default function Wrapper(props: Props) {
	return (
		<Html>
			<Head />
			<Body style={main}>
				<Container style={container}>
					{props.logo}
					<Section style={paragraphContent}>
						<Hr style={hr} />
						<Text style={heading}>{props.title}</Text>
					</Section>
					{props.children}
					<Section style={paragraphContent}>
						<Hr style={hr} />
						{props.footer}
					</Section>
				</Container>
			</Body>
		</Html>
	)
}
