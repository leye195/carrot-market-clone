import { useEffect, useState } from "react";

type useCoordsType = {
  lat: number | null;
  lng: number | null;
};

const useCoords = () => {
  const [coords, setCoords] = useState<useCoordsType>({ lat: null, lng: null });

  const onSuccess = (pos: GeolocationPosition) => {
    const {
      coords: { latitude, longitude },
    } = pos;
    setCoords({ lat: latitude, lng: longitude });
  };

  const onError = (err: GeolocationPositionError) => {
    console.warn(`${err.code}: ${err.message}`);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { ...coords };
};

export default useCoords;
