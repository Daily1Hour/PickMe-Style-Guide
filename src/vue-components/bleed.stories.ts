import type { Meta, StoryObj } from "@storybook/vue3";

import bleed from "./bleed.vue";

const meta = {
    title: "Vue/bleed",
    component: bleed,
    tags: ["autodocs"],

    argTypes: {
        height: { control: "text" },
        default: { control: "text", table: { disable: true } },
    },
    args: {
        default: "Empty",
    },
} satisfies Meta<typeof bleed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        height: 100,
    },
};
