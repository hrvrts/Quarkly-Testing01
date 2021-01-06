import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"height": "64px",
	"src": "https://uploads.quarkly.io/5ff4e456f4d20b00220589bc/images/logo-deity-x-logo.svg?v=2021-01-05T23:39:37.751Z",
	"max-width": "320px",
	"quarkly-title": "Branding",
	"margin": "0px 0px 32px 0px",
	"min-width": "200px",
	"sizes": "800px",
	"width": "66%"
};
const overrides = {};

const Logo = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Image {...rest} />;
};

Object.assign(Logo, { ...Image,
	defaultProps,
	overrides
});
export default Logo;