import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [ bookData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])   // this empty array makes it so that the function occurs on mount vs. everytime the user does anything
    // like just clicking a box. 
    // if it was [componentName] this would look for changes on the component, and run when it sees a change

    return { bookData, getData:handleDataFetch }
}