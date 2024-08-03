import LocationDetails from "../../components/LocationDetails";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LocationPage() {
  const [specificLocation, setSpecificLocation] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchSpecificLocation = async () => {
        const response = await fetch(`/api/locations/${id}`);
        const specificLocation = await response.json();
        setSpecificLocation(specificLocation);
      };
      fetchSpecificLocation();
    }
  }, [id]);
  if (specificLocation) {
    const { name, lngLat, type, address, city, postcode } = specificLocation;

    return (
      <>
        <title>{name}</title>

        <LocationDetails
          specificLocation={specificLocation}
        />
      </>
    );
  }
}
