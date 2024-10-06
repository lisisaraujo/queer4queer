import LocationDetails from "../../components/LocationDetails";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
    const { name } = specificLocation;

    return (
      <>
        <Head>
          <title>{name}</title>
        </Head>

        <LocationDetails specificLocation={specificLocation} />
      </>
    );
  }

  return null;
}