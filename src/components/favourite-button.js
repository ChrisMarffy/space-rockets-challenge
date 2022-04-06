import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Star } from "react-feather";
import { FavouritesContext } from "./app";

export default function FavouriteButton({
  itemId,
  type = 'launch'
}) {
  return (
    <FavouritesContext.Consumer>
      {({ favouriteLaunches, favouriteLaunchPads, toggleFavouriteLaunch, toggleFavouritePad }) => {

        const favouriteClicked = (e) => {
          e.preventDefault();
          if(type === 'launch'){
            toggleFavouriteLaunch(itemId);
          }else if (type === "pad") {
            toggleFavouritePad(itemId);
          } 
        };

        const isFavourite = type === 'launch' ? favouriteLaunches.includes(itemId): favouriteLaunchPads.includes(itemId);
        const variant = isFavourite ? "solid" : "outline";

        return (
          <IconButton
            aria-label="favourite"
            icon={<Star />}
            variant={variant}
            colorScheme="yellow"
            onClick={favouriteClicked}
          ></IconButton>
        );
      }}
    </FavouritesContext.Consumer>
  );
}
