
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-8 mx-1 lg:mx-2 lg:px-12 flex flex-col font-mono">
      <div className="text-center flex flex-col justify-center mt-24">
        <h1>Welcome to Your One Stop News Shop</h1>
        <h2 className="mt-8">This little app uses NewsAPI to gather all the articles on the Web that <h2 className="inline-flex font-bold">YOU</h2> care about</h2>
        <h3 className="mt-8">You can visit your feed below by clicking the experly crafted button.</h3>
        <Link href="/feed/1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 mt-12 mx-auto rounded">Feed</button>
        </Link>
        
      </div>
    </div>
  );
}