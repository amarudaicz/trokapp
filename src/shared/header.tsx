import { Button, Checkbox, CircularProgress, NextUIProvider, Switch } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Header = () => {
  const toggleDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    console.log(prefersDarkMode);

    const body = document.querySelector("body")!;

    if (prefersDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.toggle("dark");
    }
  };

  return (
    <>
      <header className="p-4 w-full h-auto bg-white dark:bg-neutral-800 h-1rem">
        <div className="flex justify-between">
          <Link to="/">HOME</Link>
          <Button>BUTTON</Button>
          <Switch color="success" />
          <CircularProgress color="warning" aria-label="Loading..."/>

          <Checkbox defaultSelected>Option</Checkbox>

        </div>
      </header>
    </>
  );
};
