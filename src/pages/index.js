import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="url(https://uploads.quarkly.io/5ff4e456f4d20b00220589bc/images/mollie-hero-bg.jpg?v=2021-01-06T10:54:49.770Z) 0% 0%/cover fixed,--color-dark"
			padding="32px 32px 32px 32px"
			min-height="100vh"
			color="--greyD2"
			sm-width="auto"
			lg-width="auto"
			sm-padding="32px 24px 32px 24px"
			quarkly-title="Hero"
			max-height="960px"
		>
			<Override
				slot="SectionContent"
				justify-content="center"
				text-align="center"
				align-self="auto"
				align-items="center"
			/>
			<Box quarkly-title="HeroContent" margin="0px 0px 32px 0px" max-width="800px">
				<Components.Logo max-width="320px" height="auto" margin="0px 0px 48px 0px" lg-margin="0px 0px 32px 0px" />
				<Text
					font="--headline1"
					text-align="center"
					color="--light"
					as="h1"
					letter-spacing="-0.05em"
					max-width="800px"
					display="block"
					quarkly-title="HeroTitle"
					margin="16px 0px 64px 0px"
					border-color="--color-light"
					lg-font="normal 900 64px/1.2 Space Grotesk, sans-serif"
					sm-font="normal 900 40px/1.2 Space Grotesk, sans-serif"
					md-font="normal 900 50px/1.2 Space Grotesk, sans-serif"
					md-margin="0 0px 32px 0px"
				>
					Effortless payments
					<br />
					with Mollie.
				</Text>
				<Text font="--lead" color="--lightD2" as="p" quarkly-title="Subtitle">
					Get notified when Mollie is available with Falcon Platform.
				</Text>
				<Components.FormStackHorizontal />
				<Link
					href="https://www.deity.io"
					font="--base"
					color="--lightD2"
					border-color="--color-lightD1"
					hover-background="rgba(0, 0, 0, 0.5)"
					target="_blank"
					display="inline-block"
					padding="2px 6px 2px 6px"
				>
					Read the documentation
				</Link>
			</Box>
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