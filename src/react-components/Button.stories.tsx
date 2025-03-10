import { Meta, StoryObj } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/global.js";
import chakraUiSystem from "./chakra-ui-system";
import Button from "./Button";

const meta = {
    title: "React/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },

    decorators: [
        (Story) => (
            <ChakraProvider value={chakraUiSystem}>
                <Story />
            </ChakraProvider>
        ),
    ],
    argTypes: {
        colorPalette: { control: "text" },
        borderRadius: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
        },
    },
    args: {
        colorPalette: "pickme-primary",
        borderRadius: "lg",
        children: "Click me",
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        colorPalette: "pickme-primary",
    },
};

export const SecondaryButton: Story = {
    args: {
        colorPalette: "pickme-secondary",
    },
};

export const TertiaryButton: Story = {
    args: {
        colorPalette: "pickme-tertiary",
    },
};
