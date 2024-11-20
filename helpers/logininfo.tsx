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

type Props = {
	username: string
	laterLink: string
}

export default function LoginInfo(props: Props) {
	return (
		<>
			<Section style={paragraphContent}>
				<Text style={paragraph}>
					To easily log in later, save this URL.
				</Text>
				<Section style={linkContainer}>
					<Text style={linkStyle}>{props.laterLink}</Text>
				</Section>
			</Section>
			<Section style={paragraphContent}>
				<Text style={codeHeaderStyle}>Your Username</Text>
				<Section style={codeContainer}>
					<Text style={codeStyle}>{props.username}</Text>
				</Section>
			</Section>
		</>
	)
}
