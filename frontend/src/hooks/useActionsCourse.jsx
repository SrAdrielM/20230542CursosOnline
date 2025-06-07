import { url } from "../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useActionsCourse = (getCourses) => {
    const navigate = useNavigate();

    const deleteCourse = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete course");
            }
            toast.success("Course deleted successfully");
            getCourses();
        } catch (error) {
            console.error("Error deleting course:", error);
            toast.error("Error al eliminar el curso");
        } finally {
        }
    };

    const handleUpdateCourse = (id) => {
        navigate(`/courses/${id}`);
    };

    return {
        deleteCourse,
        handleUpdateCourse
    };
};

export default useActionsCourse;