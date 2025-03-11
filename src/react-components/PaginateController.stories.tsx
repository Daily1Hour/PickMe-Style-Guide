import { Meta, StoryObj } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/global.js";
import chakraUiSystem from "./chakra-ui-system";
import PaginateController from "./PaginateController";

const meta = {
    title: "React/PaginateController",
    component: PaginateController,
    tags: ["autodocs"],

    decorators: [
        (Story) => (
            <ChakraProvider value={chakraUiSystem}>
                <Story />
            </ChakraProvider>
        ),
    ],
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
