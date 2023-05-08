import AppLayout from '@/components/common/layout/AppLayout';
import FeaturesSection from '@/components/custom/Home/FeaturesSection';
import HeroSection from '@/components/custom/Home/HeroSection';
import { Container } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<HeroSection />
			<Container maxW={'container.lg'}>
				<FeaturesSection />
			</Container>
		</AppLayout>
	);
};

export default Home;
