"use client";

// import { useQuery } from "@apollo/client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
// import type { GetStaticProps } from "next";
import React, { useEffect, useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
// import Footer from "../components/Footer";
// import { initializeApollo } from "../graphql/client";
// import { QUERY_PLACES } from "../graphql/queries";
// import { PlacesQueryQuery } from "../graphql/types/types.generated";

const initialViewState = {
  latitude: 51.5,
  longitude: 0.12,
  zoom: 0.7,
  bearing: 0,
  pitch: 0,
};

export default function GlobePage({}) {
  const [popupInfo, setPopupInfo]: any = useState(null);
  const { theme } = useTheme();
  // const { data } = useQuery<PlacesQueryQuery>(QUERY_PLACES);
  const mapRef: any = React.useRef();

  const [settings, _] = useState({
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 0,
  });

  const data = {
    places: [
      {
        location: { lon: 2.293, lat: 48.85955 },
        locationType: "Eiffel Tower, FR",
      },
    ],
  };

  const pins = useMemo(
    () =>
      data.places.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={place.location.lon}
          latitude={place.location.lat}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
          }}
        >
          <div
            className={`h-4 w-4 cursor-pointer rounded-xl border-2 pin-${place.locationType.toLowerCase()} bg-clip-content p-0.5`}
          />
        </Marker>
      )),
    [data.places]
  );

  const onMapLoad = React.useCallback(() => {
    if (window.screen.width > 768) {
      // @ts-ignore
      mapRef.current.zoomTo(2.5);
    }
  }, []);

  return (
    <>
      {/* <SEO
        seo={{
          title: "Globe",
          path: "/globe",
        }}
      /> */}
      <div className="mask-gradient pointer-events-none absolute left-0 top-0 z-10 h-32 w-full bg-gradient-to-t from-white/0 to-white backdrop-blur-lg dark:from-neutral-950/0 dark:to-neutral-950 sm:h-48"></div>

      <div className="min-h-[90vh]">
        <Map
          ref={mapRef}
          onLoad={onMapLoad}
          initialViewState={initialViewState}
          {...settings}
          mapStyle={
            theme === "dark"
              ? "mapbox://styles/fschultz/ck6faw97927g61ioh30mxkgxl"
              : "mapbox://styles/mapbox/light-v9"
          }
          projection={{ name: "globe" }}
          style={{
            width: "100%",
            height: "90vh",
          }}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          {pins}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.location.lon)}
              latitude={Number(popupInfo.location.lat)}
              onClose={() => setPopupInfo(null)}
            >
              <div className="text-xs text-silver-dark">
                {popupInfo.locationType}
              </div>
              <div>{popupInfo.name}</div>
            </Popup>
          )}
        </Map>
      </div>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: QUERY_PLACES,
//   });

//   const cache = apolloClient.cache.extract();

//   return {
//     props: {
//       initialApolloState: { ...cache },
//     },
//   };
// };
