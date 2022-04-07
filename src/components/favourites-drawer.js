import React from "react";

import {
    Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { FavouritesContext } from "./app";
import { LaunchItem } from "./launches";
import { LaunchPadItem } from "./launch-pads";

export default function FavouritesDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Favourites</DrawerHeader>

        <DrawerBody>
          <Tabs>
            <TabList>
              <Tab>Launches</Tab>
              <Tab>Launch Pads</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <FavouriteLaunches />
              </TabPanel>
              <TabPanel>
                <FavouritePads />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export function FavouriteLaunches() {
  return (
    <FavouritesContext.Consumer>
        {({ favouriteLaunches }) => {
            return (
                favouriteLaunches.length > 0 ?
                (<Stack direction="column" spacing="4">
                  {favouriteLaunches &&
                    favouriteLaunches
                      .map((launch, index) => (
                        <LaunchItem
                          launch={launch}
                          key={launch.flight_number}
                        />
                      ))}
                </Stack>)
                :
                (<Box display="flex" justifyContent="center" alignItems="center"> No Favourite Launches</Box>)
            );
        }}
    </FavouritesContext.Consumer>
  );
}
export function FavouritePads() {
  return (
    <FavouritesContext.Consumer>
      {({
        favouriteLaunchPads
      }) => {
        return favouriteLaunchPads.length > 0 ? (
          <Stack direction="column" spacing="4">
            {favouriteLaunchPads &&
              favouriteLaunchPads.map((launchPad, index) => (
                <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
              ))}
          </Stack>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            {" "}
            No Favourite Launch Pads
          </Box>
        );
      }}
    </FavouritesContext.Consumer>
  );
}