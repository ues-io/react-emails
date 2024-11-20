import * as React from "react"
import LogoWrapper from "../helpers/logowrapper"
import { Section, Text } from "@react-email/components"
import { paragraph, paragraphContent } from "../helpers/styles"

type Props = {
	titleText: string
	bodyText: string
	logoUrl: string
	logoWidth: string
	logoAlt: string
	footerText: string
}

export default function GenericMessage(props: Props) {
	const {
		titleText = "${titleText}",
		bodyText = "${bodyText}",
		logoUrl = "${logoUrl}",
		logoWidth = "${logoWidth}",
		logoAlt = "${logoAlt}",
		footerText = "${footerText}",
	} = props
	return (
		<LogoWrapper
			title={titleText}
			logoUrl={logoUrl}
			logoWidth={logoWidth}
			logoAlt={logoAlt}
			footerText={footerText}
		>
			<Section style={paragraphContent}>
				<Text style={paragraph}>{bodyText}</Text>
			</Section>
		</LogoWrapper>
	)
}

GenericMessage.PreviewProps = {
	titleText: "Something Interesting Happened.",
	bodyText:
		"This is some cool text that will convey some kind of message. I want it to be kind of long so that I can understand what these kind of things will look like.",
	logoUrl: "/static/uesioblack.png",
	logoAlt: "ues.io",
	logoWidth: "40",
	footerText: "ues.io - Your app platform",
}
