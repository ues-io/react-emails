import * as React from "react"
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

export default function CreateLogin(props: Props) {
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
			actionText="Set Password"
			actionLink={resetLink}
		>
			<LoginInfo laterLink={laterLink} username={username} />
		</ActionWrapper>
	)
}

CreateLogin.PreviewProps = {
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
