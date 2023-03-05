import { Container, Flex, Stack, Text, Box, Image } from "@chakra-ui/react";
import * as React from "react";
import Hero from "./hero";

import featureOne from "../../assets/images/product-one.png";
import featureTwo from "../../assets/images/product-two.png";
import featureThree from "../../assets/images/product-three.png";
import featureFour from "../../assets/images/teamwork.jpg";

import pattern from "../../assets/images/pattern.png";

interface FeatureProps {
  image: string;
  alternate: boolean;
}
const Feature = (props: FeatureProps) => (
  <Flex
    w="100%"
    direction={{ base: "column-reverse", md: "row" }}
    gap={30}
  >
    {props.alternate ? (
      <React.Fragment>
        <Box w={{ md: "100%" }}>
          <Image src={props.image} alt="The team" />
        </Box>
        <Container mt={20}>
          <Text
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
            maxW={"3xl"}
          >
            The Problem
          </Text>
          <Text
            color={"gray.500"}
            maxW={"3xl"}
            fontSize={{ base: "md", sm: "md", md: "lg" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Container>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Container mt={20}>
          <Text
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
            maxW={"3xl"}
          >
            The Problem
          </Text>
          <Text
            color={"gray.500"}
            maxW={"3xl"}
            fontSize={{ base: "md", sm: "md", md: "lg" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Container>
        <Box w={{ md: "100%" }}>
          <Image src={props.image} alt="The team" />
        </Box>
      </React.Fragment>
    )}
  </Flex>
);

export const Landing = () => {
  return (
    <React.Fragment>
      <Hero />
      <Container maxW={"5xl"} as={Stack}>
        <Feature image={featureOne} alternate={false} />
        <Feature image={featureTwo} alternate={true} />
        <Feature image={featureThree} alternate={false} />
        <Feature image={featureFour} alternate={true} />
      </Container>
      {/* <Container maxW={"100%"} p={"10vh"} backgroundImage={`url(${pattern})`} backgroundSize={"30vh"} backgroundRepeat="repeat-x"></Container> */}
    </React.Fragment>
  );
};
