import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Star } from "react-feather";

export default function FavouriteButton({
  isFavourite,
  toggleFavourite
}) {


  const favouriteClicked = (e) => {
    e.preventDefault();
    toggleFavourite();
  }

  const variant = isFavourite ? 'solid' : 'outline';
  
  return (
    <IconButton
      aria-label="favourite"
      icon={<Star />}
      variant={variant}
      colorScheme="yellow"
      onClick={favouriteClicked}
    ></IconButton>
  );
}
