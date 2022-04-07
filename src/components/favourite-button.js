import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Star } from "react-feather";
import { FavouritesContext } from "./app";

export default function FavouriteButton({
  item,
  type = 'launch'
}) {
  return (
    <FavouritesContext.Consumer>
      {({ favouriteLaunches, favouriteLaunchPads, toggleFavouriteLaunch, toggleFavouritePad }) => {

        const favouriteClicked = (e) => {
          e.preventDefault();
          if(type === 'launch'){
            toggleFavouriteLaunch(item);
          }else if (type === "pad") {
            toggleFavouritePad(item);
          } 
        };

        const isFavourite =
          type === "launch"
            ? favouriteLaunches
                .map((launch) => launch?.flight_number)
                .includes(item.flight_number)
            : favouriteLaunchPads
                .map((launch) => launch?.site_id)
                .includes(item.site_id);
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
