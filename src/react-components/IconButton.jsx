import { chakra, IconButton } from "@chakra-ui/react";

export default chakra(
    IconButton,
    {
        base: {
            colorPalette: "pickme",
            h: "36px",
            py: "4px",
            px: "16px",
            _hover: {
                opacity: 0.8,
            },
        },
    },
    {
        defaultProps: {
            variant: "ghost",
            size: "2xl",
        },
    },
);
