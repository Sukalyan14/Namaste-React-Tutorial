import { useEffect, useState } from "react"

const useOnline = () => {
    const [isOnline , setIsOnline] = useState(true)

    useEffect(() => {
        const handleOffline = () => setIsOnline(false)
        // window.addEventListener("online" , () => {
        //     setIsOnline(true)  
        // })
        window.addEventListener("offline" , handleOffline)

        return () => {
            window.removeEventListener("offline", handleOffline)
        }
    },[])
    
    return isOnline
}

export default useOnline