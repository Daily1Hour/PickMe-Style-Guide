import { Meta, StoryObj } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/global.js";
import chakraUiSystem from "./chakra-ui-system";
import Button from "./Button";

const meta = {
    title: "React/Button",
    component: Button,
    tags: ["autodocs"],

    decorators: [
        (Story) => (
            <ChakraProvider value={chakraUiSystem}>
                <Story />
            </ChakraProvider>
        ),
    ],
    argTypes: {
        colorPalette: {
            control: "text",
            defaultValue: "pickme-primary",
        },
        borderRadius: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
            defaultValue: "lg",
        },
        children: { control: "text", defaultValue: "Click me" },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Click me",
        colorPalette: "pickme-primary",
    },
};

export const SecondaryButton: Story = {
    args: {
        children: "Click me",
        colorPalette: "pickme-secondary",
    },
};

export const TertiaryButton: Story = {
    args: {
        children: "Click me",
        colorPalette: "pickme-tertiary",
    },
};
