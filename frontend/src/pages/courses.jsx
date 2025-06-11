import "./styles/Courses.css";

import { Link, useParams } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import Button from "../components/Button";

import { useForm } from "react-hook-form";
import useDataCourse from "../hooks/useDataCourse";

const Courses = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataCourse(methods);

  return (
    <div className="courses-container">
      <Link to="/home" className="back-link">
        Back To Home
      </Link>

    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        <Titulo titulo="Agregar un nuevo curso" />

        <div className="form-grid">
          <InputText
            type="text"
            name="curso"
            label="Titulo del curso"
            placeholder="titulo"
            register={register}
            error={errors.curso?.message}
          />
          <InputText
            type="text"
            name="tematica"
            label="Tematica del curso"
            placeholder="tematica"
            register={register}
            error={errors.tematica?.message}
          />
          <InputText
            type="text"
            name="instructor"
            label="Nombre del instructor"
            placeholder="instructor"
            register={register}
            error={errors.instructor?.message}
          />
          <InputText
            type="text"
            name="descripcion"
            label="descripcion del curso"
            placeholder="descripcion"
            register={register}
            error={errors.descripcion?.message}
          />
        </div>

        <Button type="submit" text={id ? "Edit Course" : "Save Course"} />
      </form>
      </div>
    </div>
  );
};

export default Courses;