import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import FavouritesDrawer from "./favourites-drawer";
import { Moon, Star, Sun } from "react-feather";
import AppFavouritesContext from "./favourites-context";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <AppFavouritesContext>
      <FavouritesDrawer isOpen={isOpen} onClose={onClose}></FavouritesDrawer>
      <div>
        <NavBar onFavouritesOpen={onOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:launchId" element={<Launch />} />
          <Route path="/launch-pads" element={<LaunchPads />} />
          <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
        </Routes>
      </div>
    </AppFavouritesContext>
  );
}

function NavBar({ onFavouritesOpen }: { onFavouritesOpen: () => void }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="gray.800"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle Dark Mode"
        variant="ghost"
        colorScheme="blue"
        icon={colorMode === "light" ? <Moon /> : <Sun />}
      ></IconButton>
      <Button
        leftIcon={<Star />}
        colorScheme="teal"
        variant="solid"
        onClick={onFavouritesOpen}
      >
        Favourites
      </Button>
    </Flex>
  );
}
