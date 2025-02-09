import { forwardRef } from "react";
import { Flex } from "@chakra-ui/react";

export default forwardRef(({ children, ...props }, ref) => {
    return (
        <Flex
            {...props}
            ref={ref}
            w="100%"
            px="16px"
            py="8px"
            _hover={{ bg: "gray.100" }}
            cursor="pointer"
        >
            {children}
        </Flex>
    );
});
