import { Section, Text } from "@react-email/components"
import * as React from "react"
import {
	codeContainer,
	codeHeaderStyle,
	codeStyle,
	linkContainer,
	linkStyle,
	paragraph,
	paragraphContent,
} from "../helpers/styles"
import ActionWrapper from "../helpers/actionwrapper"
import LoginInfo from "../helpers/logininfo"

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

export default function ResetPassword(props: Props) {
	const {
		titleText = "${titleText}",
		bodyText = "${bodyText}",
		username = "${username}",
		resetLink = "${resetLink}",
		laterLink = "${laterLink}",
		logoUrl = "${logoUrl}",
		logoWidth = "${logoWidth}",
		logoAlt = "${logoAlt}",
		footerText = "${footerText}",
	} = props
	return (
		<ActionWrapper
			title={titleText}
			logoUrl={logoUrl}
			logoWidth={logoWidth}
			logoAlt={logoAlt}
			footerText={footerText}
			bodyText={bodyText}
			actionText="Reset Password"
			actionLink={resetLink}
		>
			<LoginInfo laterLink={laterLink} username={username} />
		</ActionWrapper>
	)
}

ResetPassword.PreviewProps = {
	titleText: "Reset your password.",
	bodyText: "Your password has been reset. Click below to create a new one.",
	username: "ben",
	laterLink: "https://crm.ues.io/login",
	logoUrl: "/static/uesioblack.png",
	logoAlt: "ues.io",
	logoWidth: "40",
	footerText: "ues.io - Your app platform",
}
