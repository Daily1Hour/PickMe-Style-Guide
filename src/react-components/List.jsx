import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

export default function List({ children, bordered = false, separator = false }) {
    return (
        <VStack gap={0} borderWidth={bordered ? 1 : 0}>
            {React.Children.toArray(children).map((child) => (
                <Flex w="100%" borderTopWidth={separator ? 1 : 0}>
                    {child}
                </Flex>
            ))}
        </VStack>
    );
}
