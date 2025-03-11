import { Meta, StoryObj } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

import chakraUiSystem from "./chakra-ui-system";
import Container from "./Container";

const meta = {
    title: "React/Container",
    component: Container,
    tags: ["autodocs"],

    decorators: [
        (Story) => (
            <ChakraProvider value={chakraUiSystem}>
                <Story />
            </ChakraProvider>
        ),
    ],
    argTypes: {
        offset: { control: "text" },
        children: { control: "text" },
    },
    args: {
        children: "Contents",
        offset: 10,
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
