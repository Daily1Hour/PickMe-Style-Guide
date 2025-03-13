import { Meta, StoryObj } from "@storybook/react";

import { DrawerLayout } from "./Drawer";

const meta = {
    title: "React/Drawer",
    tags: ["autodocs"],
    component: DrawerLayout,

    argTypes: {},
} satisfies Meta<typeof DrawerLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Contents",
    },
};
