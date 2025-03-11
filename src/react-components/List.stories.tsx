import { Meta, StoryObj } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/global.js";
import chakraUiSystem from "./chakra-ui-system";
import List from "./List";
import Item from "./Item";

const meta = {
    title: "React/List",
    component: List,
    tags: ["autodocs"],

    decorators: [
        (Story) => (
            <ChakraProvider value={chakraUiSystem}>
                <Story />
            </ChakraProvider>
        ),
    ],
    argTypes: {
        children: { table: { disable: true } },
        bordered: { control: "boolean" },
        separator: { control: "boolean" },
        colorPalette: { control: "text" },
    },
    args: {
        children: [
            <Item key="item1">Item 1</Item>,
            <Item key="item2">Item 2</Item>,
            <Item key="item3">Item 3</Item>,
        ],
        colorPalette: "pickme-primary",
    },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        bordered: true,
        separator: true,
    },
};

export const Borderless: Story = {
    args: {},
};

export const Bordered: Story = {
    args: {
        bordered: true,
    },
};

export const Separator: Story = {
    args: {
        separator: true,
    },
};
