import { forwardRef } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

export default forwardRef<HTMLDivElement, FlexProps>(({ children, ...props }, ref) => {
    return (
        <Flex
            w="100%"
            px="16px"
            py="8px"
            cursor="pointer"
            colorPalette="pickme-tertiary"
            _hover={{ bg: "colorPalette.emphasized" }}
            {...props}
            ref={ref}
        >
            {children}
        </Flex>
    );
});
