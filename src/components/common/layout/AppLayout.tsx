import { Box, Container } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import Header from '../App/Header';

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box>
			<Container maxW='container.lg'>
				<Header />
			</Container>

			<main>{children}</main>

			<footer></footer>
		</Box>
	);
};

export default AppLayout;
