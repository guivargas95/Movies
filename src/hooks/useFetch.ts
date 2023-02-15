import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null)
    const [pageData, setPageData] = useState<T | null>(null)
    useEffect(() => {
        async function getData() {
            await axios.get(url)
                .then(response => {
                    setData(response.data.results);
                    setPageData(response.data);
                
                })
        }

        getData()

    }, [url])

    
    return { data, pageData }
}