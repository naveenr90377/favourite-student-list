import StudentCard from "../components/StudentCard"

const StudentList = () => {

    const students = [
        {
            id: 1,
            name: "Arun",
            rollNumber: "AI001"
        },
        {
            id: 2,
            name: "Srinithi",
            rollNumber: "AI002"
        },
        {
            id: 3,
            name: "Karthik",
            rollNumber: "AI003"
        },
        {
            id: 4,
            name: "Cheliyan",
            rollNumber: "AI004"
        }
        
    ]

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-4xl">

                <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
                    Student List
                </h1>
<p className="mb-6 text-center text-gray-600">
    Total Students: {students.length}
</p>


 <div className="grid gap-4 md:grid-cols-2">
{students.map((student) => (
              <StudentCard key={student.id}
                            student={student} />
                    ))}
    </div>

            </div>
        </div>
    )
}

export default StudentList