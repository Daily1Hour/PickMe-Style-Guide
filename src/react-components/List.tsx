import React, { forwardRef } from "react";
import { VStack, Flex } from "@chakra-ui/react";

export default forwardRef<
    HTMLDivElement,
    { children: React.ReactNode; bordered?: boolean; separator?: boolean }
>(({ children, bordered, separator, ...props }, ref) => {
    return (
        <VStack
            borderWidth={bordered ? 1 : 0}
            borderColor="var(--pickme-border, gray.100)"
            gap={0}
            divideY={(separator ? 1 : 0) + "px"}
            divideColor="var(--pickme-border, gray.100)"
            {...props}
            ref={ref}
        >
            {React.Children.toArray(children).map((child) => (
                <Flex w="100%">{child}</Flex>
            ))}
        </VStack>
    );
});
