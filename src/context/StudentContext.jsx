import { createContext, useState } from "react"

const StudentContext = createContext()

export const StudentProvider = ({ children }) => {

    const [favourites, setFavourites] = useState([])

    return (
        <StudentContext.Provider value={{ favourites, setFavourites }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContext