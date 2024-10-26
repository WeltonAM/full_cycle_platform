'use client';
import { useEffect } from 'react';
import useBlog from "@/data/hooks/useBlog";
import Loading from "./Loading";

export default function Blog({ id }: { id: string }) {
    const { blog, obterBlog } = useBlog();

    useEffect(() => {
        if (id) {
            obterBlog(id);
        }
    }, [id, obterBlog]);

    if (!blog) return <Loading />;

    return (
        <div className='flex flex-col items-center justify-center py-10 px-36'>
            <h1 className="text-xl font-bold mb-4 text-gray-200">{blog.title}</h1>
            <p className="text-gray-400 text-lg">{blog.body}</p>
        </div>
    );
}
