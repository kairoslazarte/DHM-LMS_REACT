import React, { useContext } from 'react';
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

const StudentMessagesSidebar = () => {

    return (
        <div className='mx-2'>
           <div className="flex flex-row space-x-2">
                <input 
                    type="text" 
                    className="border border-gray-300 rounded-md text-sm w-full" 
                    placeholder="Search teacher's name.."
                    // onChange={(e) => setSearchStudentInput(e.target.value)} 
                />
                <button 
                    type="button" 
                    className="text-sm text-white bg-blue-500 h-auto rounded-md px-6 transition duration-200 border border-blue-500 hover:bg-white hover:text-blue-500"
                    // onClick={searchStudents}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default StudentMessagesSidebar;