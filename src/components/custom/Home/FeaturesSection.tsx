import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const FeaturesSection:React.FC<{}> = () => {
  return (
    <Box boxShadow='xl' sx={{
        display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: 10
    }}>
        <Box textAlign={"center"} borderRight={"1px solid #eee"} m={5} > 
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"40px"} height={"40px"} background={"#eee"} borderRadius={100} textAlign={"center"}>
                <Image src={"/assets/btnIcons/help.png"} alt='help icon' width={19} height={19} />
            </Box>
            <Text fontSize={15} fontWeight={700}>Hotline</Text>
        </Box>
    </Box>
  )
}

export default FeaturesSection