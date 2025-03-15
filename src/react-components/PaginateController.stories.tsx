import { Meta, StoryObj } from "@storybook/react";

import PaginateController from "./PaginateController";

const meta = {
    title: "React/PaginateController",
    component: PaginateController,
    tags: ["autodocs"],

    argTypes: {},
    args: {
        handlePageChange: () => {},
        currentPage: 1,
        totalPages: 5,
    },
} satisfies Meta<typeof PaginateController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
