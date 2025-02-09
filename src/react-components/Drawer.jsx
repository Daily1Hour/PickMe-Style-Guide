import React from "react";
import { MdMenu } from "react-icons/md";
import {
    DrawerRoot,
    DrawerActionTrigger,
    DrawerHeader as ChakraDrawerHeader,
    DrawerBody as ChakraDrawerBody,
    DrawerContent,
    DrawerTrigger,
} from "@chakra-ui/react";

import IconButton from "./IconButton";

export const DrawerLayout = ({ children }) => {
    return (
        <DrawerRoot placement="start" size="xs">
            <DrawerTrigger asChild position="fixed" m="16px">
                <IconButton>
                    <MdMenu />
                </IconButton>
            </DrawerTrigger>
            <DrawerContent minHeight="100vh" w="250px">
                <ChakraDrawerHeader p="16px">
                    <DrawerActionTrigger asChild>
                        <IconButton>
                            <MdMenu />
                        </IconButton>
                    </DrawerActionTrigger>
                </ChakraDrawerHeader>

                <ChakraDrawerBody>{children}</ChakraDrawerBody>
            </DrawerContent>
        </DrawerRoot>
    );
};
