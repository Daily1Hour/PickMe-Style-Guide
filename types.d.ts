declare module "@styleguide/global" {
    export {};
}

declare module "@styleguide/react" {
    import { SystemContext, ButtonProps } from "@chakra-ui/react";

    const chakraUiSystem: SystemContext;

    const Button: React.FC<ButtonProps>;

    const List: React.FC<{
        children: React.ReactNode;
        bordered?: boolean;
        separator?: boolean;
    }>;

    export { chakraUiSystem, Button, List };
}
