import Link from "next/link";

import homeContent from "../content/home";

export default () => (
  <div>
    <h1>{homeContent.title}</h1>
    <p>{homeContent.text}</p>
    <img src={homeContent.image} />

    <Link href="/about" passHref>
      <a>About page</a>
    </Link>
  </div>
);
