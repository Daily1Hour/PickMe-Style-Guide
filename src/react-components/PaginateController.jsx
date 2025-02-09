import { MdFirstPage, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLastPage } from "react-icons/md";
import { HStack, Text } from "@chakra-ui/react";

import IconButton from "./IconButton";

export default function PaginateController({ handlePageChange, currentPage = 0, totalPages = 1 }) {
    return (
        <HStack w="100%" mt={2} mx={3} justify="space-between">
            <IconButton
                size="md"
                minW={5}
                onClick={() => handlePageChange("first")}
                disabled={currentPage === 0}
            >
                <MdFirstPage />
            </IconButton>

            <IconButton
                minW={5}
                size="md"
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 0}
            >
                <MdKeyboardArrowLeft />
            </IconButton>

            <Text>
                {currentPage + 1} / {totalPages}
            </Text>

            <IconButton
                size="md"
                minW={5}
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages - 1}
            >
                <MdKeyboardArrowRight />
            </IconButton>
            <IconButton
                size="md"
                minW={5}
                onClick={() => handlePageChange("last")}
                disabled={currentPage === totalPages - 1}
            >
                <MdLastPage />
            </IconButton>
        </HStack>
    );
}
