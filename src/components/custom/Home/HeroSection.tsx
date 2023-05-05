import HeroActionCard from '@/components/common/App/HeroActionCard'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection:React.FC<{}> = () => {
  return (
    <div style={{
        height: "110vh",
        background: "url('/assets/hero_banner/heroBanner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>

    <Flex gap={5} align={"center"}>
       <Link href={"https://surokkha.gov.bd/enroll"} >
         <Image src={"/assets/hero_banner/vaccineImg.png"} alt="action image" width={401} height={390} style={{cursor: "pointer"}} />
        </Link>

        <div>
            {
                ACTION_BUTTON_DATA.map((data: ICardData, idx:number) => <HeroActionCard key={idx} cardData={data} />)
            }
        </div>
    </Flex>
    </div>
  )
}

export default HeroSection



export interface ICardData {
btnName: string
btnIcon: JSX.Element
redirectUrl: string
badgeColor: string
colorOnHover: string
}
export const ACTION_BUTTON_DATA = [
    {
        btnName: "check status",
        btnIcon: <Image src={"/assets/btnIcons/check.png"} alt="btn icon" width={75} height={72} />,
        redirectUrl: "https://surokkha.gov.bd/vaccine-status",
        badgeColor: "#0d7b2c",
        colorOnHover: "#dfffda"
    },
    {
        btnName: "vaccine card",
        btnIcon: <Image src={"/assets/btnIcons/card.png"} alt="btn icon" width={58} height={40} />,
        redirectUrl: "https://surokkha.gov.bd/vaccine-card",
        badgeColor: "#d8de00",
        colorOnHover: "#feffda"
    },
    {
        btnName: "certificate",
        btnIcon: <Image src={"/assets/btnIcons/certificate.png"} alt="btn icon" width={47} height={53} />,
        redirectUrl: "https://surokkha.gov.bd/certificate",
        badgeColor: "#25be88",
        colorOnHover: "#dafff2"
    },
    {
        btnName: "faq",
        btnIcon: <Image src={"/assets/btnIcons/faq.png"} alt="btn icon" width={75} height={72} />,
        redirectUrl: "https://surokkha.gov.bd/faq",
        badgeColor: "#5fc6cc",
        colorOnHover: "#dafdff"
    },
]