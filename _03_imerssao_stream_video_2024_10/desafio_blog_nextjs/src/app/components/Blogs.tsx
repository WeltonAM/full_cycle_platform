'use client'
import useBlog from "@/data/hooks/useBlog";
import Blog from "@/data/model/Blog";
import Link from "next/link";
import Loading from "./Loading";

export default function Blogs() {
    const { blogs } = useBlog();

    if(!blogs) return <Loading />;

    return (
        <div className="flex flex-1 flex-col items-center justify-center py-5 px-36 gap-4">
            <h1 className="text-2xl font-bold select-none text-zinc-300">Blogs</h1>
            <table>
                <thead className="flex items-center justify-start text-zinc-200">
                    <tr>
                        <th className="p-4 font-bold">#</th>
                        <th className="p-4 font-bold">Autor</th>
                        <th className="p-4 font-bold">Título</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="shadow-md rounded-lg p-4">
                        {blogs.map((blog: Blog) => (
                            <Link 
                                key={blog.id} 
                                href={`/${blog.id}`} 
                                className="
                                    flex items-center gap-4 
                                    hover:bg-slate-900 hover:text-white
                                    text-zinc-300
                                "
                            >
                                <td className="p-4">#{blog.id}</td>
                                <td className="p-4">{blog.userId}</td>
                                <td className="p-4">{blog.title}</td>
                            </Link>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}