import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Home() {
  return (
    <>
      <title>Queer4Queer</title>
      <section className="map">
        <MyMap />
      </section>
    </>
  );
}
