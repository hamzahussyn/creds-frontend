import * as React from "react";
import {
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Card,
  CardBody,
  Flex,
  Img,
  CardHeader,
  Heading,
  Text,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import Mascot from "../../assets/logo/light-mascot.png";
import { Prediction } from "../../services/api/prediction";

function NoResultCard() {
  return (
    <React.Fragment>
      <CardHeader>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "lg", sm: "lg", md: "2xl" }}
            maxW={"3xl"}
            textAlign="center"
          >
            Get Results by posting your course description
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Img src={Mascot} width={200} />
        </Flex>
      </CardBody>
    </React.Fragment>
  );
}

function ResultsCard(props: any) {
  return (
    <React.Fragment>
      <CardHeader>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "lg", sm: "lg", md: "2xl" }}
            maxW={"3xl"}
          >
            Your Results Evaluated!
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack>
          {props.prediction ? (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Text
                color={"#68c2e8"}
                fontSize={{ base: "md", sm: "md", md: "lg" }}
              >
                Certificate:{" "}
                <Text as={"span"} color={"gray.500"}>
                  {props.prediction}
                </Text>
              </Text>
            </Flex>
          ) : null}
          {props.complexity ? (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Text
                color={"#68c2e8"}
                fontSize={{ base: "md", sm: "md", md: "lg" }}
              >
                Complexity:{" "}
                <Text as={"span"} color={"gray.500"}>
                  {props.complexity}
                </Text>
              </Text>
            </Flex>
          ) : null}
        </Stack>
      </CardBody>
    </React.Fragment>
  );
}

export const Equivalence = () => {
  const [file, setFile] = React.useState<File | null>();
  const [results, setResults] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const readFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(
      "the event i recieved",
      e.target.files ? e.target.files["0"] : null
    );
    setFile((prev) => (e.target.files ? e.target.files[0] : null));
  };

  const submit = () => {
    if (!file) {
      return;
    }
    const form = new FormData();
    form.append("file", file);
    setLoading(true);

    Prediction.generate(form)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <React.Fragment>
      <Container maxW="6xl" p={"10"}>
        <InputGroup>
          <InputLeftAddon
            children="File Name: "
            // backgroundColor={"#0e1e40"}
            // color="white"
          />
          <Input
            size="md"
            type="file"
            name="file"
            accept=".docx"
            onChange={readFile}
          />
        </InputGroup>
        <Button
          mt={"2"}
          rounded={"full"}
          px={6}
          colorScheme={"orange"}
          bg={"#68c2e8"}
          _hover={{ bg: "#0e1e40" }}
          onClick={submit}
          disabled={loading}
        >
          Evaluate
        </Button>
        <Card mt={10} pt={5} pb={5} variant="outline">
          <NoResultCard />
          {loading && (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#68c2e8"
                size="xl"
              />
            </Flex>
          )}
          {results && !loading && (
            <ResultsCard
              prediction={results.prediction}
              complexity={results.complexity}
            />
          )}
        </Card>
      </Container>
    </React.Fragment>
  );
};
