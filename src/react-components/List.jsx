import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

export default function List({ children, bordered = false, separator = false }) {
    return (
        <VStack
            borderWidth={bordered ? 1 : 0}
            borderColor="var(--pickme-border, gray.100)"
            gap={0}
            divideY={separator ? 1 : 0}
            divideColor="var(--pickme-border, gray.100)"
        >
            {React.Children.toArray(children).map((child) => (
                <Flex w="100%">{child}</Flex>
            ))}
        </VStack>
    );
}
