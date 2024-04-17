"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? "";

export default function MapParis() {
  const mapContainer = useRef(null);
  const map: any = useRef(null);

  const [lng, setLng] = useState(2.293);
  const [lat, setLat] = useState(48.85955);
  const [zoom, setZoom] = useState(14.8);
  const [pitch, setPitch] = useState(62);

  const { theme, resolvedTheme } = useTheme();
  let mapTheme: string;
  if (resolvedTheme === "dark") {
    mapTheme = "night";
  } else if (resolvedTheme === "light") {
    mapTheme = "light";
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current ?? "",
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
      // interactive: false,
    });

    map.current.on("style.load", () => {
      map.current.setConfigProperty("basemap", "lightPreset", mapTheme);
      map.current.setPadding({ left: 150 });
    });
  });

  return (
    <div
      ref={mapContainer}
      className="map-container h-full w-full select-none rounded-2xl"
    />
  );
}
