import { useContext } from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { StudentSidebarContexts } from "../../contexts/student/StudentSidebarContexts";
import { TeacherSidebarContexts } from "../../contexts/teacher/TeacherSidebarContext";

const ArrowBackButton = ({component}) => {
    const {setActiveComponent} = useContext(component === "teacher" ? TeacherSidebarContexts : StudentSidebarContexts);

    return (
        <div>
            <button
                className="bg-[#58c150] p-2 text-white rounded-md hover:opacity-70 transition duration-200 ml-auto text-sm"
                onClick={() => setActiveComponent("Home")}
            >
                <ArrowCircleLeftIcon className='w-auto h-6 text-white ml-auto' />
            </button>
        </div>
    )
}

export default ArrowBackButton;