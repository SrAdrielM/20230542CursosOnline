import "./styles/Home.css";
import { data, Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import useFetchCourse from "../hooks/useFetchCourse";
import useActionsCourse from "../hooks/useActionsCourse";

const Home = () => {
    const { dataCourse, getCourses } = useFetchCourse();
    const { deleteCourse, handleUpdateCourse } = useActionsCourse(getCourses);

    return (
        <div className="home-container">
            <div className="header-container">
                <Titulo titulo="Cursos en el sistema" />

                <Link to="/courses" className="add-course-link">
                    Agregar curso
                </Link>
            </div>

            <div className="table-container">
                <table className="course-table">
                    <thead className="table-header">
                        <tr>
                            <th className="table-cell">titulo</th>
                            <th className="table-cell">tematica</th>
                            <th className="table-cell">instructor</th>
                            <th className="table-cell">descripcion</th>
                            <th className="table-cell">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataCourse?.map((course) => (
                            <tr key={course.id} className="table-row">
                                <td className="table-cell">{course.curso}</td>
                                <td className="table-cell">{course.tematica}</td>
                                <td className="table-cell">{course.instructor}</td>
                                <td className="table-cell">{course.descripcion}</td>
                                <td className="table-cell actions-cell">
                                    <Button text="Editar" variant="primary" onClick={() => handleUpdateCourse(course.id)} />
                                    <Button text="Eliminar" variant="danger" onClick={() => deleteCourse(course.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;