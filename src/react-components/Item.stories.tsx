import { Meta, StoryObj } from "@storybook/react";

import Item from "./Item";

const meta = {
    title: "React/Item",
    component: Item,
    tags: ["autodocs"],

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
