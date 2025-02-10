import React, { forwardRef, useRef, useLayoutEffect } from "react";
import { MdMenu } from "react-icons/md";
import { Box, HStack } from "@chakra-ui/react";
import {
    DrawerRoot,
    DrawerActionTrigger,
    DrawerHeader as ChakraDrawerHeader,
    DrawerBody as ChakraDrawerBody,
    DrawerFooter as ChakraDrawerFooter,
    DrawerContent,
    DrawerTrigger,
} from "../shared/chakra-ui/drawer";

import IconButton from "./IconButton";

export const DrawerLayout = forwardRef(({ children, ...props }, ref) => {
    // 슬롯 구분
    const childrenArray = React.Children.toArray(children);
    const header = childrenArray.find((child) => child.type === DrawerHeader);
    const body = childrenArray.find((child) => child.type === DrawerBody);
    const footer = childrenArray.find((child) => child.type === DrawerFooter);

    // DrawerContent가 포함될 컨테이너의 ref
    const containerRef = useRef(null);
    useLayoutEffect(() => {
        //DOM 업데이트 직후 실행
        containerRef.current = document.getElementById("main-container");
    }, []);

    return (
        <DrawerRoot placement="start" size="xs">
            <DrawerTrigger asChild>
                <MenuTrigger />
            </DrawerTrigger>

            <DrawerContent
                key={containerRef.current}
                portalRef={containerRef}
                minHeight="100vh"
                w="250px"
                bg="#eee"
                {...props}
                ref={ref}
            >
                <DrawerActionTrigger asChild>
                    <MenuTrigger />
                </DrawerActionTrigger>

                <ChakraDrawerHeader p="16px">
                    <HStack justify="center">{header}</HStack>
                </ChakraDrawerHeader>

                <ChakraDrawerBody p={0}>{body}</ChakraDrawerBody>

                <ChakraDrawerFooter>{footer}</ChakraDrawerFooter>
            </DrawerContent>
        </DrawerRoot>
    );
});

export const DrawerHeader = ({ children }) => <>{children}</>;
export const DrawerBody = ({ children }) => <>{children}</>;
export const DrawerFooter = ({ children }) => <>{children}</>;

const MenuTrigger = forwardRef((props, ref) => (
    <Box position="fixed" m="16px">
        <IconButton ref={ref} {...props}>
            <MdMenu />
        </IconButton>
    </Box>
));
