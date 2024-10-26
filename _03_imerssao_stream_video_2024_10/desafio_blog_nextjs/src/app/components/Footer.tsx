import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-8 flex flex-col justify-end items-center border-t border-gray-800 w-full">
            <p className="text-gray-500">
                &copy; {new Date().getFullYear()} FullCycle
            </p>
            <p className="text-gray-500">
                Desenvolvido com ❤️ por {' '}
                <Link href="https://welton-matos-dev-portfolio.vercel.app/" target="_blank">
                    WeltonMatosDev
                </Link>
            </p>
        </footer>
    );
}