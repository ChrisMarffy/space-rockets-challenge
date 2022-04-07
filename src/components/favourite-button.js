import React, {useContext, useState, useEffect} from "react";
import { IconButton, keyframes } from "@chakra-ui/react";
import { Star } from "react-feather";
import { FavouritesContext } from "./app";

const animationKeyframes = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.4); }
  100% { transform: scale(1); }
`;

const animation = `${animationKeyframes} 0.5s ease-in-out`;

export default function FavouriteButton({
  item,
  type = 'launch'
}) {
  const { favouriteLaunches, favouriteLaunchPads, toggleFavouriteLaunch, toggleFavouritePad } = useContext(FavouritesContext)

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
  
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    setIsFirstTime(false)
  }, [isFavourite]);

  useEffect(() => {
    setIsFirstTime(true);
  }, []);

  
  const variant = isFavourite ? "solid" : "outline";

  return (
    <IconButton
      aria-label="favourite"
      animation={!isFirstTime && isFavourite ? animation : null}
      icon={<Star />}
      variant={variant}
      colorScheme="yellow"
      onClick={favouriteClicked}
    ></IconButton>
  );
}
