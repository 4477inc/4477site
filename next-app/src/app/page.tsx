import Link from "next/link";

const NAME: string = "Next.js";

function Menu() {
  return (
    <Link href="/randommtg" className="text-blue-500">RandomMTG</Link>
  );
}

export default function Page() {
  return (
    <>
      <h1 className="underline">Hello, {NAME}</h1>
      <h2>This is the home page</h2>
      <Menu />
    </>
  );
}
