import { Text, Img } from "@react-email/components"
import * as React from "react"
import { footerText, logo } from "./styles"
import Wrapper from "./wrapper"

type Props = {
	children?: React.ReactNode
	title?: string
	logoUrl: string
	logoWidth: string
	logoAlt: string
	footerText?: string
}

export default function LogoWrapper(props: Props) {
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
			{props.children}
		</Wrapper>
	)
}
