import React, { useState } from "react";
import { ILaunchPad } from "../models/launch-pad.model";
import { ILaunch } from "../models/launch.model";

interface FavouritesContextState {
  favouriteLaunches: ILaunch[];
  favouriteLaunchPads: ILaunchPad[];
  toggleFavouriteLaunch: (launch: ILaunch) => void;
  toggleFavouritePad: (launch: ILaunchPad) => void;
}

export const FavouritesContext = React.createContext(
  {} as FavouritesContextState
);

/**
 * Function that can be used to wrap a component in a context that provides the ability
 * to view favourited launches and launch pads, as well as toggle the favourite state of
 * those objects.
 */
export default function AppFavouritesContext(props: any) {
  const storedFavLaunches = localStorage.getItem("favouriteLaunches");
  const storedFavLaunchPads = localStorage.getItem("favouriteLaunchPads");
  const [favouriteLaunches, setFavouriteLaunches] = useState(
    storedFavLaunches ? JSON.parse(storedFavLaunches) : []
  );
  const [favouriteLaunchPads, setFavouriteLaunchPads] = useState(
    storedFavLaunchPads ? JSON.parse(storedFavLaunchPads) : []
  );

  const toggleFavouriteLaunch = (launch: ILaunch) => {
    const isFavourite = favouriteLaunches
      .map((launch: ILaunch) => launch?.flight_number)
      .includes(launch.flight_number);
    let newFavourites = favouriteLaunches;

    if (isFavourite) {
      newFavourites = newFavourites.filter(
        (favLaunch: ILaunch) => favLaunch.flight_number !== launch.flight_number
      );
    } else {
      newFavourites.push(launch);
    }
    setFavouriteLaunches([...newFavourites]);
    localStorage.setItem("favouriteLaunches", JSON.stringify(newFavourites));
  };

  const toggleFavouritePad = (pad: ILaunchPad) => {
    const isFavourite = favouriteLaunchPads
      .map((pad: ILaunchPad) => pad?.site_id)
      .includes(pad.site_id);
    let newFavourites = favouriteLaunchPads;

    if (isFavourite) {
      newFavourites = newFavourites.filter(
        (favPad: ILaunchPad) => favPad.site_id !== pad.site_id
      );
    } else {
      newFavourites.push(pad);
    }
    setFavouriteLaunchPads([...newFavourites]);
    localStorage.setItem("favouriteLaunchPads", JSON.stringify(newFavourites));
  };

  return (
    <FavouritesContext.Provider
      value={{
        favouriteLaunches,
        favouriteLaunchPads,
        toggleFavouriteLaunch,
        toggleFavouritePad,
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
}
