import AppLayout from "@/components/common/layout/AppLayout";
import HeroSection from "@/components/custom/Home/HeroSection";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <HeroSection />
    </AppLayout>
  );
};

export default Home;
