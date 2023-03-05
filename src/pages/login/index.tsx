import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import study from "../../assets/images/study.jpg";
import * as React from "react";

export default function Login() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const submit = (email: string, password: string) => {
    if (!email.length || !password.length) return;

    setLoading(true);
    setTimeout(() => {
      if (email === "test@creds.com" && password === "creds2023") {
        localStorage.setItem("token", "test-token");
        window.location.reload();
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Text
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
            maxW={"3xl"}
          >
            Sign in to your account
          </Text>
          <FormControl id="email">
            <FormLabel
              color={"gray.600"}
              fontWeight={400}
              maxW={"3xl"}
              fontSize={{ base: "md", sm: "md", md: "md" }}
            >
              Email address
            </FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel
              color={"gray.600"}
              maxW={"3xl"}
              fontWeight={400}
              fontSize={{ base: "md", sm: "md", md: "md" }}
            >
              Password
            </FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox color={"gray.600"}>Remember me</Checkbox>
              <Link color={"gray.600"}>Forgot password?</Link>
            </Stack>
            <Button
              isLoading={loading}
              onClick={(e) => submit(email, password)}
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"#68c2e8"}
              _hover={{ bg: "#0e1e40" }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={study} />
      </Flex>
    </Stack>
  );
}
