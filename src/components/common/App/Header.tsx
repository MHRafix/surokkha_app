import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Header: React.FC<{}> = () => {
	return (
		<Flex justifyContent={'space-between'} align={'center'} py={2}>
			<Image src={'/assets/logo/logo.png'} alt='Logo' width={223} height={82} />
			<Box display={'flex'} gap={3} alignItems={'center'}>
				<Text cursor={'pointer'}>Home</Text>
				<Text cursor={'pointer'}>Home</Text>
				<Text cursor={'pointer'}>Home</Text>
				<Text cursor={'pointer'}>Home</Text>
				<Text cursor={'pointer'}>Home</Text>
				<Text cursor={'pointer'}>Home</Text>
				<Text cursor={'pointer'}>Home</Text>
				<Button colorScheme='orange' size={'sm'}>
					Bangla
				</Button>
			</Box>
		</Flex>
	);
};

export default Header;
