import { useContext } from "react"
import StudentContext from "../context/StudentContext"

const StudentCard = ({ student }) => {

    const { favourites, setFavourites } = useContext(StudentContext)

    const alreadyFavourite = favourites.some(
        (fav) => fav.id === student.id
    )

    return (
        <div className="mx-auto mb-4 max-w-md rounded-xl bg-white p-6 shadow-md">

            <h2 className="mb-2 text-2xl font-bold text-gray-800">
                {student.name}
            </h2>

            <p className="mb-4 text-gray-600">
                Roll Number: {student.rollNumber}
            </p>

            <button
                disabled={alreadyFavourite}
                className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                onClick={() => {

                    if (!alreadyFavourite) {
                        setFavourites([...favourites, student])
                    }

                }}
            >
                {alreadyFavourite
                    ? "Already Favourite"
                    : "Add to Favourite"}
            </button>

        </div>
    )
}

export default StudentCard