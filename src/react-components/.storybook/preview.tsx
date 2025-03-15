import type { Preview } from "@storybook/react";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "../../styles/global.js";
import chakraUiSystem from "../chakra-ui-system";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <ChakraProvider value={chakraUiSystem}>
                <Story />
            </ChakraProvider>
        ),
    ],
};

export default preview;
