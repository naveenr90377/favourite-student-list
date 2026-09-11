import { useContext } from "react"
import StudentContext from "../context/StudentContext"

const Favourites = () => {

    const { favourites, setFavourites } = useContext(StudentContext)

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-4xl">

     <h1 className="mb-8 text-center text-4xl font-bold text-gray-800"> Favourite Students </h1>

                {favourites.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">
                        No favourite students added yet </p>

                ) : (

                    <div className="grid gap-4 md:grid-cols-2">

                        {favourites.map((student) => (

     <div key={student.id} className="mx-auto mb-4 w-full max-w-md rounded-xl bg-white p-6 shadow-md"
>
  <h2 className="mb-2 text-2xl font-bold text-gray-800"> {student.name}  </h2>
<p className="mb-6 text-center text-gray-600">
    Total Favourites: {favourites.length}
</p>
                                <p className="mb-4 text-gray-600">
                                    Roll Number: {student.rollNumber}</p>

 <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
            onClick={() => {
            setFavourites(
    favourites.filter(
(fav) => fav.id !== student.id))}}>
            Remove from Favourite    </button>
</div>
))}

                    </div>

                )}

            </div>

        </div>
    )
}

export default Favourites