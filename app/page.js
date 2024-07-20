import Image from "next/image";
import Comments from "./comment-area/comments";

export default function Home() {
  return (
    <main className="h-screen">
      <h1>Final Project Template</h1>
      <Comments />
    </main>
  );
}
