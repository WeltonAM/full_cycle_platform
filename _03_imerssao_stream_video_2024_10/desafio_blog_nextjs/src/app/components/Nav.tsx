import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-between px-10 py-5 w-full">
            <Link href="/" className="flex items-center gap-1">
                <img src="/logo-top.png" alt="FullCycle" className="h-8 mr-4" />
                <p className="text-xl font-bold text-zinc-300">FullCycle Desafio Blogs</p>
            </Link>
        </nav>
    );
}