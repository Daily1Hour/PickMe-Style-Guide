import { chakra, Button } from "@chakra-ui/react";

export default chakra(Button, {
    base: {
        colorPalette: "pickme",
        borderRadius: "lg",
        _hover: {
            opacity: 0.8,
        },
    },
});
