import { NextUIProvider } from "@nextui-org/react";
import { Routing } from "../routing";
import { Header } from "../shared/header";

export const Layout = () => {
  return (
    <>
        <Header></Header>
        <Routing></Routing>
    </>
  );
};
