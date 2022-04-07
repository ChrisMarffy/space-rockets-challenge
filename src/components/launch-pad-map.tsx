import { DivIcon, LatLngExpression } from "leaflet";
import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Target } from "react-feather";
import { ILaunchPad } from "../models/launch-pad.model";
import { Router, useNavigate } from "react-router";

export default function LaunchPadMap({
  launchPads,
}: {
  launchPads: ILaunchPad[];
}) {
  const position: LatLngExpression = [34.1107001, -101.2028682];

  const icon = new DivIcon({
    html: ReactDOMServer.renderToString(
      <div
        style={{
          backgroundColor: "red",
          width: "24px",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
        }}
      >
        <Target color="black" />
      </div>
    ),
  });

  const navigate = useNavigate();

  return (
    <MapContainer
      center={position}
      zoom={4}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {launchPads &&
        launchPads.flat().map((pad) => {
          const iconPos: LatLngExpression = [
            pad.location.latitude,
            pad.location.longitude,
          ];
          return (
            <Marker
              position={iconPos}
              icon={icon}
              eventHandlers={{
                click: (e) => {
                  navigate(`/launch-pads/${pad.site_id}`);
                },
              }}
            ></Marker>
          );
        })}
    </MapContainer>
  );
}
