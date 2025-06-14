import { useState, useEffect} from "react";
import { toast } from "react-hot-toast";
import { url } from "../utils/apiUrl";
import useFetchCourse from "./useFetchCourse";
import { useNavigate, useParams } from "react-router-dom";

const useDataCourse = (methods) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {getCourses, getCoursesById} = useFetchCourse();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = methods;

    const saveCourse = async (dataForm) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataForm),
            });
            if (!response.ok) {
                toast.error("Failed to add course");
                throw new Error("Failed to add course");
            }
            toast.success("Course added successfully");
        } catch (error) {
            console.error("Error saving course:", error);
            toast.error("Error al guardar el curso");
        }
        finally {
            reset();
            window.location.href = "/home";
        }
    }

    const handleCourseAction = (dataForm) => {
        if (id) {
            updateCourse(dataForm);
        } else {
            saveCourse(dataForm);
        }
    };

    const updateCourse = async (dataForm) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataForm),
            });
            if (!response.ok) {
                toast.error("Failed to update course");
                throw new Error("Failed to update course");
            }
            toast.success("Course updated successfully");
        } catch (error) {
            console.error("Error updating course:", error);
            toast.error("Error al actualizar el curso");
        } finally {
            reset();
            window.location.href = "/home";
        }
    };

    const loadCourse = async () => {
        if (id) {
            const course = await getCoursesById(id);
            if (course) {
                reset({
                    curso: course?.curso,
                    tematica: course?.tematica,
                    instructor: course?.instructor,
                    descripcion: course?.descripcion,
                });
            } 
        }
    };

    useEffect(() => {
        loadCourse();
    }, [id]);

    return {saveCourse, register,
        handleSubmit: handleSubmit(handleCourseAction),
         errors, loadCourse
        };
};

export default useDataCourse;