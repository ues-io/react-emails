import { Section, Text, Button } from "@react-email/components"
import * as React from "react"
import {
	button,
	buttonContent,
	paragraph,
	paragraphContent,
} from "../helpers/styles"
import LogoWrapper from "./logowrapper"

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
		<LogoWrapper
			title={props.title}
			logoUrl={props.logoUrl}
			logoWidth={props.logoWidth}
			logoAlt={props.logoAlt}
			footerText={props.footerText}
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
		</LogoWrapper>
	)
}
