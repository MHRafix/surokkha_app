import { ICardData } from '@/components/custom/Home/HeroSection'
import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'


const HeroActionCard:React.FC<{
    cardData: ICardData
}> = ({
    cardData
}) => {
  return (
    <Link href={cardData.redirectUrl}>
    
    <Flex justifyContent={"space-around"} align={"center"} my={2} cursor={"pointer"} bg={"#fff"} position={"relative"} w={328} h={90} rounded={"md"} _hover={{
        background: cardData.colorOnHover,
        transition: ".3s",
}}>
<Box w={"10px"} h={"72px"} bg={cardData.badgeColor} position={"absolute"} left={0} borderTopEndRadius={"5px"} borderBottomRightRadius={"5px"}></Box>
{
  cardData.btnIcon
}
<Text fontSize={22} fontWeight={700} align={"left"} textTransform={"uppercase"}>{cardData.btnName}</Text>
</Flex>
        </Link>
  )
}

export default HeroActionCard