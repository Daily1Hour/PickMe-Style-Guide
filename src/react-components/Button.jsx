import { chakra, Button } from "@chakra-ui/react";

export default chakra(Button, {
    base: {
        colorPalette: "pickme-primary",
        borderRadius: "lg",
        _hover: {
            opacity: 0.8,
        },
    },
});
