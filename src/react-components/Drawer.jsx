import React from "react";
import { MdMenu } from "react-icons/md";
import {
    DrawerRoot,
    DrawerActionTrigger,
    DrawerHeader as ChakraDrawerHeader,
    DrawerBody as ChakraDrawerBody,
    DrawerFooter as ChakraDrawerFooter,
    DrawerContent,
    DrawerTrigger,
} from "../shared/chakra-ui/Drawer";

import IconButton from "./IconButton";

export const DrawerHeader = ({ children }) => <>{children}</>;

export const DrawerBody = ({ children }) => <>{children}</>;

export const DrawerFooter = ({ children }) => <>{children}</>;

export function DrawerLayout({ children }) {
    // 슬롯 구분
    const childrenArray = React.Children.toArray(children);
    const header = childrenArray.find((child) => child.type === DrawerHeader);
    const body = childrenArray.find((child) => child.type === DrawerBody);
    const footer = childrenArray.find((child) => child.type === DrawerFooter);

    return (
        <DrawerRoot placement="start" size="xs">
            <DrawerTrigger asChild position="fixed" m="16px">
                <IconButton>
                    <MdMenu />
                </IconButton>
            </DrawerTrigger>
            <DrawerContent minHeight="100vh" w="250px">
                <DrawerActionTrigger asChild position="fixed" m="16px">
                    <IconButton>
                        <MdMenu />
                    </IconButton>
                </DrawerActionTrigger>

                <ChakraDrawerHeader>{header}</ChakraDrawerHeader>

                <ChakraDrawerBody>{body}</ChakraDrawerBody>

                <ChakraDrawerFooter>{footer}</ChakraDrawerFooter>
            </DrawerContent>
        </DrawerRoot>
    );
}
