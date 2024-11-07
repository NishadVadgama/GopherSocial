import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>Gophersocial</h1>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}
