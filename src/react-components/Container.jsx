import { chakra } from "@chakra-ui/react";

const Container = chakra("div", {
    base: {
        transform: "translate3d(0,0,0)",
    },
});

export default ({ children }) => {
    return <Container id="main-container">{children}</Container>;
};
