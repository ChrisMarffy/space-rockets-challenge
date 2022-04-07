import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import FavouritesDrawer from "./favourites-drawer";
import { Star } from "react-feather";

export const FavouritesContext = React.createContext();

export default function App () {

  const storedFavLaunches = localStorage.getItem("favouriteLaunches");
  const storedFavLaunchPads = localStorage.getItem("favouriteLaunchPads");
  const [favouriteLaunches, setFavouriteLaunches] = useState(storedFavLaunches ? JSON.parse(storedFavLaunches) : []);
  const [favouriteLaunchPads, setFavouriteLaunchPads] = useState(storedFavLaunchPads ? JSON.parse(storedFavLaunchPads) : []);

  

  const toggleFavouriteLaunch = (launch) => {
      const isFavourite = favouriteLaunches
        .map((launch) => launch?.flight_number)
        .includes(launch.flight_number);
      let newFavourites = favouriteLaunches;

      if (isFavourite) {
        newFavourites = newFavourites.filter(
          (favLaunch) => favLaunch.flight_number !== launch.flight_number
        );
      } else {
        newFavourites.push(launch);
      }
      setFavouriteLaunches([...newFavourites]);
      localStorage.setItem("favouriteLaunches", JSON.stringify(newFavourites));
    };

  const toggleFavouritePad = (pad) => {
      const isFavourite = favouriteLaunchPads
        .map((launch) => launch?.site_id)
        .includes(pad.site_id);
      let newFavourites = favouriteLaunchPads;

      if (isFavourite) {
        newFavourites = newFavourites.filter(
          (favPad) => favPad.site_id !== pad.site_id
        );
      } else {
        newFavourites.push(pad);
      }
      setFavouriteLaunchPads([...newFavourites]);
      localStorage.setItem(
        "favouriteLaunchPads",
        JSON.stringify(newFavourites)
      );
    };
      
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <FavouritesContext.Provider value={{favouriteLaunches, favouriteLaunchPads, toggleFavouriteLaunch, toggleFavouritePad}}>
        <FavouritesDrawer isOpen={isOpen} onClose={onClose}></FavouritesDrawer>
        <div>
          <NavBar onFavouritesOpen={onOpen}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/launches/:launchId" element={<Launch />} />
            <Route path="/launch-pads" element={<LaunchPads />} />
            <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
          </Routes>
        </div>
      </FavouritesContext.Provider>
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
