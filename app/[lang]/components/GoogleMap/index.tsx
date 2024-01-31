import React, { useEffect, useRef, useCallback } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Location {
  description: string;
  lat: number;
  lng: number;
}

interface MapProps {
  apiKey: string;
  locations: Location[];
}

const DynamicMap: React.FC<MapProps> = React.memo(({ apiKey, locations }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const createMap = useCallback(async () => {
    // Check if there are any locations and if the component is mounted
    if (locations.length === 0 || !mapContainerRef.current) {
      return;
    }

    try {
      // Initialize the Google Maps loader
      const loader = new Loader({
        apiKey: apiKey,
        version: 'weekly',
      });

      // Load the Google Maps API
      await loader.load();

      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: locations[0].lat, lng: locations[0].lng },
        zoom: 7,
        mapTypeId: 'roadmap',
      });

      // Create markers for each location
      locations.forEach((location) => {
        new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.description,
        });
      });
    } catch (error) {
      console.error('Error loading Google Maps API:', error);
    }
  }, [apiKey, locations]);

  useEffect(() => {
    createMap();

    // Cleanup function
    return () => {
      // Cleanup logic if needed
    };
  }, [createMap]);

  return (
    <div ref={mapContainerRef} style={{ height: '458px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}></div>
  );
});

DynamicMap.displayName = 'DynamicMap';

export default DynamicMap;
