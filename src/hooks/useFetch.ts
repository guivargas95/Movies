import axios from "axios";
import { useState, useEffect } from "react";
import { iPageMovies } from "../types/PageMoviesType";

export function useFetch<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null)
    const [pageData, setPageData] = useState<T | null>(null)
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data.results);
                setPageData(response.data);
            })
    }, [url])

    return { data, pageData }
}