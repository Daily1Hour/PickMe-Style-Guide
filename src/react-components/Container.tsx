import { Box, Bleed } from "@chakra-ui/react";

export default ({ children, offset }: { children: React.ReactNode; offset?: number }) => {
    const offsetHeight =
        offset ?? (document.querySelector("#pickme-nav")?.clientHeight || 0) + "px";

    return (
        <Box id="main-container">
            <Bleed h={offsetHeight}>네비게이션 공간</Bleed>
            {children}
        </Box>
    );
};
