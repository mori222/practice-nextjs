import Link from "next/link";

export default function Header(){
    return (
        <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center w-full bg-gray-200 h-full">
            <Link href="/" className="hover:text-blue-500 text-lg">Index</Link>
            <Link href="/about" className="hover:text-blue-500 text-lg">About</Link>
        </header>
    )
}