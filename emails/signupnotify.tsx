import * as React from "react"
import LoginInfo from "../helpers/logininfo"
import LogoWrapper from "../helpers/logowrapper"
import { Section, Text } from "@react-email/components"
import { paragraph, paragraphContent } from "../helpers/styles"

type Props = {
	titleText: string
	bodyText: string
	username: string
	resetLink: string
	laterLink: string
	logoUrl: string
	logoWidth: string
	logoAlt: string
	footerText: string
}

export default function SignupNotify(props: Props) {
	const {
		titleText = "${titleText}",
		bodyText = "${bodyText}",
		username = "${username}",
		laterLink = "${laterLink}",
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
			<LoginInfo laterLink={laterLink} username={username} />
		</LogoWrapper>
	)
}

SignupNotify.PreviewProps = {
	titleText: "Start closing deals.",
	bodyText:
		"Welcome to ues.io CRM. You can now set your password and log in.",
	username: "ben",
	laterLink: "https://crm.ues.io/login",
	logoUrl: "/static/uesioblack.png",
	logoAlt: "ues.io",
	logoWidth: "40",
	footerText: "ues.io - Your app platform",
}
