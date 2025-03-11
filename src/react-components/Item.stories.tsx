import { Meta, StoryObj } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/global.js";
import chakraUiSystem from "./chakra-ui-system";
import Item from "./Item";

const meta = {
    title: "React/Item",
    component: Item,
    tags: ["autodocs"],

    decorators: [
        (Story) => (
            <ChakraProvider value={chakraUiSystem}>
                <Story />
            </ChakraProvider>
        ),
    ],
    argTypes: {
        colorPalette: { control: "text" },
        cursor: { control: "text" },
        children: { control: "text" },
    },
    args: {
        children: "Contents",
    },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        colorPalette: "pickme-secondary",
        cursor: "pointer",
    },
};
