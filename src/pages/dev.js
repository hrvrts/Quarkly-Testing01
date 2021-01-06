import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-dark" padding="64px 0 64px 0">
			<Stack sm-flex-direction="column">
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="left" align-items="flex-start" />
					{"        "}
					<Box quarkly-title="inputGroup" align-self="stretch">
						<Text
							font="normal 400 16px/1.5 --fontFamily-googlePublicSans"
							margin="0px 0px 16px 0px"
							display="inline-block"
							quarkly-title="Label"
							color="--grey"
						>
							Your name
						</Text>
						<Input
							quarkly-title="Input"
							placeholder="Email"
							type="email"
							display="flex"
							sm-align-self="stretch"
							sm-width="100%"
							width="100%"
							height="48px"
							align-self="auto"
							border-radius="6px"
							hover-border-color="--color-indigo"
							hover-transition="border --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
							min-width="56px"
							required
						/>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="left" align-items="flex-start" />
					{"        "}
					<Box quarkly-title="inputGroup" align-self="stretch">
						<Text
							font="normal 400 16px/1.5 --fontFamily-googlePublicSans"
							margin="0px 0px 16px 0px"
							display="inline-block"
							quarkly-title="Label"
							color="--grey"
						>
							Your email address
						</Text>
						<Input
							quarkly-title="Input"
							placeholder="Email"
							type="email"
							display="flex"
							sm-align-self="stretch"
							sm-width="100%"
							width="100%"
							height="48px"
							align-self="auto"
							border-radius="6px"
							hover-border-color="--color-indigo"
							hover-transition="border --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
							min-width="56px"
							required
						/>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});