import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Input } from "@quarkly/widgets";
import ButtonLarge from "./ButtonLarge";
const defaultProps = {
	"margin": "32px -16px 16px -16px",
	"sm-flex-direction": "column",
	"quarkly-title": "FormSignUp",
	"gap": "16px",
	"font": "normal 300 16px/1.5 --fontFamily-googlePublicSans"
};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"sm-align-self": "stretch",
			"sm-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-color": "--color-primary01"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"align-self": "stretch",
			"width": "100%",
			"type": "email",
			"placeholder": "Email",
			"required": true,
			"height": "56px",
			"border-radius": "6px",
			"min-width": "32px",
			"hover-border-color": "--color-indigo",
			"hover-transition": "border --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"sm-align-self": "stretch",
			"sm-width": "100%"
		}
	},
	"buttonLarge": {
		"kind": "ButtonLarge",
		"props": {
			"align-self": "stretch",
			"width": "100%",
			"hover-background": "--color-primary",
			"children": "Sign up"
		}
	}
};

const FormStackHorizontal = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{"    "}
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			<Input {...override("input")} />
			{"            "}
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<ButtonLarge {...override("buttonLarge")} />
			{"            "}
		</StackItem>
		{"    "}
		{children}
	</Stack>;
};

Object.assign(FormStackHorizontal, { ...Stack,
	defaultProps,
	overrides
});
export default FormStackHorizontal;