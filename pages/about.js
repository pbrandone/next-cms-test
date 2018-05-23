import Link from "next/link";

import aboutContent from "../content/about.json";

export default () => (
  <div>
    <h1>{aboutContent.title}</h1>
    <Link href="/" passHref>
      <a>Go to home</a>
    </Link>
  </div>
);
