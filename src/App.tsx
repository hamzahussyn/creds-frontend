import * as React from "react";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Header } from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Landing } from "./components/landing";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import { Equivalence } from "./pages/equivalence";

export const App = () => {
  const token = localStorage.getItem("token");

  return (
    <ChakraProvider theme={theme}>
      <Header auth={token ? true : false} />
      {token ? (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/equivalence" element={<Equivalence />} />
          <Route path="*" element={<Equivalence />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      )}

      <Footer />
    </ChakraProvider>
  );
};
