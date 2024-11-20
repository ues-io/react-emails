import { Section, Text, Button, Img } from "@react-email/components"
import * as React from "react"
import Wrapper from "../helpers/wrapper"
import {
	button,
	buttonContent,
	footerText,
	logo,
	paragraph,
	paragraphContent,
} from "../helpers/styles"

type Props = {
	title: string
	logoUrl: string
	logoWidth: string
	logoAlt: string
	footerText: string
	bodyText: string
	actionText: string
	actionLink: string
	children?: React.ReactNode
}

export default function ActionWrapper(props: Props) {
	return (
		<Wrapper
			title={props.title}
			logo={
				<Img
					src={props.logoUrl}
					width={props.logoWidth}
					alt={props.logoAlt}
					style={logo}
				/>
			}
			footer={<Text style={footerText}>{props.footerText}</Text>}
		>
			<Section style={paragraphContent}>
				<Text style={paragraph}>{props.bodyText}</Text>
			</Section>
			<Section style={buttonContent}>
				<Button href={props.actionLink} style={button}>
					{props.actionText}
				</Button>
			</Section>
			{props.children}
		</Wrapper>
	)
}
