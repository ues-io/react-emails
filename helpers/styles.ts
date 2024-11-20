const main = {
	backgroundColor: "#000",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
	padding: "10px 0",
} as const

const container = {
	margin: "30px auto",
	padding: "20px 0 86px",
	backgroundColor: "#fff",
	borderRadius: 5,
	overflow: "hidden",
} as const

const logo = {
	margin: "10px auto",
} as const

const heading = {
	fontSize: "24px",
	lineHeight: "42px",
	marginBottom: "0",
	fontWeight: "700",
	textAlign: "center",
} as const

const paragraphContent = {
	padding: "0 32px",
	margin: "16px 0px",
} as const

const buttonContent = {
	padding: "0 32px",
	margin: "32px 0px",
	textAlign: "center",
} as const

const hr = {
	borderColor: "#e8eaed",
	margin: "20px 0",
} as const

const paragraph = {
	fontSize: "14px",
	lineHeight: "22px",
	color: "#3c4043",
	textAlign: "center",
} as const

const codeContainer = {
	background: "#f1f5f9",
	borderRadius: "4px",
	margin: "0 auto",
	verticalAlign: "middle",
	width: "280px",
	maxWidth: "100%",
} as const

const codeStyle = {
	color: "#334155",
	display: "inline-block",
	paddingBottom: "8px",
	paddingTop: "8px",
	margin: "3px auto",
	width: "100%",
	fontWeight: "bold",
	fontSize: "16pt",
	textAlign: "center",
} as const

const linkContainer = {
	background: "#ddd6fe",
	borderRadius: "4px",
	margin: "0 auto",
	verticalAlign: "middle",
	width: "280px",
	maxWidth: "100%",
} as const

const linkStyle = {
	fontFamily: "monospace",
	color: "#4c1d95",
	display: "inline-block",
	paddingBottom: "8px",
	paddingTop: "8px",
	margin: "0 auto",
	width: "100%",
	textAlign: "center",
} as const

const codeHeaderStyle = {
	textAlign: "center",
	margin: "3px",
	textTransform: "uppercase",
	fontSize: "10pt",
	fontWeight: "600",
} as const

const footerText = {
	textAlign: "center",
	margin: "0px",
	color: "#94a3b8",
	fontSize: "10pt",
} as const

const button = {
	backgroundColor: "#FFF",
	borderRadius: "4px",
	fontWeight: "600",
	color: "#000",
	textTransform: "uppercase",
	textAlign: "center",
	padding: "12px 18px",
	margin: "0 auto",
	borderTop: "1px solid",
	borderBottom: "2px solid",
	borderLeft: "1px solid",
	borderRight: "2px solid",
	fontSize: "12pt",
} as const

export {
	main,
	container,
	logo,
	heading,
	paragraphContent,
	linkStyle,
	linkContainer,
	button,
	buttonContent,
	paragraph,
	codeContainer,
	codeStyle,
	codeHeaderStyle,
	hr,
	footerText,
}
