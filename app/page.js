import Image from "next/image";
import Comments from "./comment-area/comments";
import Link from "next/link";

//this page is used for testing purposes, feel free to render your components here
export default function Home() {
  return (
    <main>
      <h1>Final Project Template</h1>
      <Link href="/Home">Go to home page</Link>
      <Comments />
    </main>
  );
}
