import React from "react";
import { Routes, Route } from "react-router-dom";
import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import FavouritesDrawer from "./favourites-drawer";
import { Star } from "react-feather";
import AppFavouritesContext from "./favourites-context";



export default function App () {

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

function NavBar({onFavouritesOpen}) {
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
