import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import { LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
function Map({ searchData }) {
  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchData.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    lognitude: center.longitude,
    zoom: 13,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/anoopm2001/ckyyegizy002n14ntrso32qbo"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchData.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="animate-bounce cursor-pointer text-2xl"
            >
              <LocationMarkerIcon className="h-7" />
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
