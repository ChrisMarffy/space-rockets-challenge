import React from "react";

import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
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
import { motion, AnimatePresence } from "framer-motion";

export default function FavouritesDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Favourites</DrawerHeader>

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
                <FavouritePads  />
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
            return favouriteLaunches.length > 0 ? (
              <Stack direction="column" spacing="4">
                <AnimatePresence>
                  {favouriteLaunches &&
                    favouriteLaunches.map((launch, index) => (
                      <motion.div
                        key={launch.flight_number}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <LaunchItem
                          launch={launch}
                          key={launch.flight_number}
                        />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </Stack>
            ) : (
              <Box display="flex" justifyContent="center" alignItems="center">
                {" "}
                No Favourite Launches
              </Box>
            );
        }}
    </FavouritesContext.Consumer>
  );
}
export function FavouritePads() {
  return (
    <FavouritesContext.Consumer>
      {({ favouriteLaunchPads }) => {
        return favouriteLaunchPads.length > 0 ? (
          <Stack direction="column" spacing="4">
            <AnimatePresence>
              {favouriteLaunchPads &&
                favouriteLaunchPads.map((launchPad, index) => (
                  <motion.div
                    key={launchPad.site_id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <LaunchPadItem
                      key={launchPad.site_id}
                      launchPad={launchPad}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
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