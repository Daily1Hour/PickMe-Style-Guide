import { Meta, StoryObj } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

import chakraUiSystem from "./chakra-ui-system";
import { DrawerLayout } from "./Drawer";

const meta = {
    title: "React/Drawer",
    tags: ["autodocs"],
    component: DrawerLayout,

    decorators: [
        (Story) => (
            <ChakraProvider value={chakraUiSystem}>
                <Story />
            </ChakraProvider>
        ),
    ],
    argTypes: {},
} satisfies Meta<typeof DrawerLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Contents",
    },
};
