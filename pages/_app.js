import React, { useRef, useEffect, useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import "/styles/map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import "../global.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps, session }) {
  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const { data: allComments, mutate: mutateComments } = useSWR(
    `/api/comments/${id}`
  );

  function loadLocations() {
    const fetchLocations = async () => {
      setLoading(true);
      const data = await fetch("/api/locations");
      const locations = await data.json();
      setLocations(locations);

      setLoading(false);
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      if (!locations) {
        return <h1>No data</h1>;
      }
    };
    fetchLocations().catch(console.error);
  }

  // ...

  async function loadComments() {
    const data = await fetch(`/api/comments`);
    const commentsData = await data.json();
    setComments(commentsData);
    if (!commentsData) {
      console.error("Error fetching comments");
    }
    return commentsData;
  }

  // function loadComments() {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const data = await fetch(`/api/comments`);
  //     const commentsData = await data.json();

  //     setComments(commentsData);
  //     setLoading(false);

  //     if (isLoading) {
  //       return <h1>Loading Comments...</h1>;
  //     }
  //     if (!commentsData) {
  //       return <h1>No data</h1>;
  //     }
  //   };
  //   fetchData().catch(console.error);
  // }

  useEffect(() => {
    loadLocations(), loadComments();
  }, []);
  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyle />
        <SWRConfig value={{ fetcher }}>
          <Component
            {...pageProps}
            locations={locations}
            comments={comments}
            loadLocations={loadLocations}
            loadComments={mutateComments}
          />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
