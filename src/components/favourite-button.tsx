import React, { useContext, useState, useEffect, MouseEvent } from "react";
import { IconButton, keyframes } from "@chakra-ui/react";
import { Star } from "react-feather";
import { FavouritesContext } from "./favourites-context";
import { ILaunch } from "../models/launch.model";
import { ILaunchPad } from "../models/launch-pad.model";

const animationKeyframes = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.4); }
  100% { transform: scale(1); }
`;

const animation = `${animationKeyframes} 0.5s ease-in-out`;

export default function FavouriteButton({
  item,
  type = "launch",
}: {
  item: ILaunch | ILaunchPad;
  type: "launch" | "pad";
}) {
  const {
    favouriteLaunches,
    favouriteLaunchPads,
    toggleFavouriteLaunch,
    toggleFavouritePad,
  } = useContext(FavouritesContext);

  const favouriteClicked = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (type === "launch") {
      toggleFavouriteLaunch(item as ILaunch);
    } else if (type === "pad") {
      toggleFavouritePad(item as ILaunchPad);
    }
  };
  const isFavourite =
    type === "launch"
      ? favouriteLaunches
          .map((launch) => launch?.flight_number)
          .includes((item as ILaunch).flight_number)
      : favouriteLaunchPads
          .map((launch) => launch?.site_id)
          .includes((item as ILaunchPad).site_id);

  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    setIsFirstTime(false);
  }, [isFavourite]);

  useEffect(() => {
    setIsFirstTime(true);
  }, []);

  const variant = isFavourite ? "solid" : "outline";

  return (
    <IconButton
      aria-label="favourite"
      animation={!isFirstTime && isFavourite ? animation : undefined}
      icon={<Star />}
      variant={variant}
      colorScheme="yellow"
      onClick={favouriteClicked}
    ></IconButton>
  );
}
