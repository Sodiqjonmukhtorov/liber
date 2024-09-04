import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Link className="underline text-[24px] text-blue-600" href={`/users`}>
        Profile
      </Link>
    </div>
  );
}
