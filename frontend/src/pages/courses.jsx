import { Link, useParams } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import Button from "../components/Button";

import { useForm } from "react-hook-form";
import useDataCourse from "../hooks/useDataCourse";

const Courses = () => {
    const { id } = useParams();
    const methods = useForm();
    const {register, handleSubmit, errors} = useDataCourse(methods);
    
    return  (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/home"
        className="text-2xl font-bold text-black mb-4 p-2 rounded w-auto text-center hover:bg-gray-200 transition-colors"
      >
        Back To Home
      </Link>
      <form
      onSubmit={handleSubmit}
      className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4 ">
        <Titulo titulo="User Information" />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* nombre del curso */}
            <InputText
            type="text"
            name="titulo"
            label="Titulo del curso"
            placeholder="titulo"
            register={register}
            error={errors.titulo?.message}
            />
            {/* tematica del curso */}
            <InputText
            type="text"
            name="tematica"
            label="Tematica del curso"
            placeholder="tematica"
            register={register}
            error={errors.tematica?.message}
            />
 
            {/* instructor del curso */}
            <InputText
            type="text"
            name="instructor"
            label="Nombre del instructor"
            placeholder="instructor"
            register={register}
            error={errors.instructor?.message}
          />

          {/* descripcion del curso */}
          <InputText
            type="text"
            name="descripcion"
            label="descripcion del curso"
            placeholder="descripcion"
            register={register}
            error={errors.descripcion?.message}
          />
        </div>
        <Button type="submit" text={id ? "Edit User" : "Save User"} />
      </form>
    </div>
    )
}

export default Courses;