import { Meta, StoryObj } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";

import "../styles/global.js";
import chakraUiSystem from "./chakra-ui-system";
import IconButton from "./IconButton";

const meta = {
    title: "React/IconButton",
    component: IconButton,
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
        variant: { control: "select", options: ["solid", "subtle", "surface", "outline", "ghost"] },
        size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
        rounded: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    },
    args: {
        variant: "ghost",
        size: "2xl",
        rounded: "full",
        children: <FaReact />,
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        colorPalette: "pickme-primary",
    },
};

export const SecondaryIconButton: Story = {
    args: {
        colorPalette: "pickme-secondary",
        variant: "solid",
    },
};

export const TertiaryIconButton: Story = {
    args: {
        colorPalette: "pickme-tertiary",
        variant: "surface",
    },
};
