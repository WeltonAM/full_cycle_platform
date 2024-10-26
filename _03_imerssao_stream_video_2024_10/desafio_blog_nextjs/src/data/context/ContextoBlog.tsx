'use client'
import { createContext, useCallback, useEffect, useState } from 'react';
import useAPI from '../hooks/useApi';
import Blog from '../model/Blog';

export interface ContextoBlogProps {
    blogs: Blog[] | null;
    obterBlogs: () => Promise<void>;
    blog: Blog | null;
    obterBlog: (id: string) => Promise<void>;
}

const ContextoBlog = createContext<ContextoBlogProps>({} as any);

export function ProvedorBlog(props: any) {
    const { httpGet } = useAPI();
    const [blogs, setBlogs] = useState<Blog[] | null>(null);
    const [blog, setBlog] = useState<Blog | null>(null);

    const obterBlogs = useCallback(async () => {
        const resposta = await httpGet('/'); 
        setBlogs(resposta);
    }, [httpGet]);

    const obterBlog = useCallback(async (id: string) => {
        const resposta = await httpGet(`/${id}`);
        setBlog(resposta);
    }, [httpGet]);

    useEffect(() => {
        obterBlogs();
    }, [obterBlogs]);

    return (
        <ContextoBlog.Provider 
            value={{ 
                blogs, 
                obterBlogs,
                blog,
                obterBlog
            }}
        >
            {props.children}
        </ContextoBlog.Provider>
    );
}

export default ContextoBlog;
