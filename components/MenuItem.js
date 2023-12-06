import Link from "next/link";

export default function MenuItem() {
  return (
    <>
      <div className="title">
        <h3>{child}</h3>
      </div>
      <div className="text">
        <p>{child}</p>
      </div>
      <div className="link">
        <Link>{child}</Link>
      </div>
    </>
  );
}
