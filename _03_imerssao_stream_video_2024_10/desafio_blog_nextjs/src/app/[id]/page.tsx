'use client'
import { useParams } from "next/navigation";
import React, { Suspense } from "react";
import Pagina from "../components/Pagina";
import Loading from "../components/Loading";

const Blog = React.lazy(() => import("../components/Blog"));

export default function BlogPage() {
    const { id } = useParams();

    if (!id) return <Loading />; 

    return (
        <Suspense fallback={<Loading />}>
            <Pagina>
                <Blog id={String(id)} />
            </Pagina>
        </Suspense>
    );
}
