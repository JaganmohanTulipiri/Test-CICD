import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const TextIcon = (props) => {
	const { text, icon } = props;
	return (
		<HStack cursor="pointer">
			<Text textStyle="h3" as="span" textDecoration="underline" color="black-2">
				{text}
			</Text>
			<Box width="6" height="6">
				<img w="full" h="full" src={icon} />
			</Box>
		</HStack>
	);
};

export default TextIcon;
