import { useState, useEffect } from 'react';
import { url } from '../utils/apiUrl';
import {toast} from 'react-hot-toast';

const useFetchCourse = () => {
    const [dataCourse, setDataCourse] = useState([]);

    const getCourses = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error ("Network response was not ok");
            }

            const data = await response.json();
            setDataCourse(data);
            toast.success("Cursos obtenidos correctamente");
        } catch (error) {
            console.error("Error fetching courses: ", error);
            toast.error("Error al obtener los cursos")
        }
    }

    const getCoursesById = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch courses")
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching courses:", error);
            console.log("Failed to fetch courses");
            return null;
        }
    };

    useEffect(() => {
        getCourses();
    }, []);

    return {
        dataCourse,
        setDataCourse,
        getCourses,
        getCoursesById
    }
}

export default useFetchCourse;