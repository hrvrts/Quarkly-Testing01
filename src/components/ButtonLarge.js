import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"font": "normal 600 18px/1.5 --fontFamily-googlePublicSans",
	"border-radius": "6px",
	"padding": "12px 32px 12px 32px",
	"disabled": false,
	"children": "Get started",
	"hover-background": "rgba(255, 255, 255, 0.1)",
	"hover-border-color": "#ffffff",
	"color": "--light",
	"background": "--color-indigo",
	"transition": "all --transitionDuration-fast ease 0s",
	"type": "button"
};
const overrides = {};

const ButtonLarge = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(ButtonLarge, { ...Button,
	defaultProps,
	overrides
});
export default ButtonLarge;