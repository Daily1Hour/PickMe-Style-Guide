import React, { forwardRef, useRef, useLayoutEffect, useState } from "react";
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

export const DrawerLayout = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
    ({ children, ...props }, ref) => {
        // 슬롯 구분
        const childrenArray = React.Children.toArray(children).filter(React.isValidElement);
        const header = childrenArray.find((child) => child.type === DrawerHeader);
        const body = childrenArray.find((child) => child.type === DrawerBody);
        const footer = childrenArray.find((child) => child.type === DrawerFooter);
        // Drawer open 상태
        const [open, setOpen] = useState(true);
        // 네비게이션 공간 계산
        const offsetHeight = (document.querySelector("#pickme-nav")?.clientHeight || 0) + "px";

        // DrawerContent가 포함될 컨테이너의 ref
        const containerRef = useRef<HTMLDivElement>(null);
        useLayoutEffect(() => {
            //DOM 업데이트 직후 실행
            containerRef.current = document.getElementById("main-container") as HTMLDivElement;
        }, []);

        return (
            <DrawerRoot
                placement="start"
                size="xs"
                open={open}
                onOpenChange={(e) => setOpen(e.open)}
            >
                <DrawerTrigger asChild>
                    <MenuTrigger />
                </DrawerTrigger>

                <DrawerContent
                    top={offsetHeight}
                    // Drawer 렌더링되는 포털 위치 지정
                    portalRef={containerRef as React.RefObject<HTMLDivElement>}
                    // 스타일
                    minHeight="100vh"
                    w="250px"
                    colorPalette="pickme-tertiary"
                    bg={{ base: "colorPalette.subtle" }}
                    // 오리지널 props, ref 전달
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
    },
);

// 슬롯 구분을 위한 컴포넌트
export const DrawerHeader = ({ children }) => <>{children}</>;
export const DrawerBody = ({ children }) => <>{children}</>;
export const DrawerFooter = ({ children }) => <>{children}</>;

// 메뉴 버튼, 이벤트 전파를 위해 forwardRef 사용
const MenuTrigger = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button">>(
    (props, ref) => (
        <Box position="fixed" m="16px">
            <IconButton ref={ref} {...props}>
                <MdMenu />
            </IconButton>
        </Box>
    ),
);
