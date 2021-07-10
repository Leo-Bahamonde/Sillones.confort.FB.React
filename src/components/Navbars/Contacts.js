import React from 'react';
import IndexNavbar2 from "components/Navbars/IndexNavbarSecondary.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import WhatsAppIcon from 'components/WhatsAppIcon/WhatsAppIcon'
import '../../assets/css/paper-kit.css'
import { useForm } from "react-hook-form";


function Contacts() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example"));
 

 
  return (
    <div>
    <div className="container mt-3 p-4">
    <IndexNavbar2/>
       <div>
          <h2>Formulario de contacto</h2>
       </div>


       <div className="mt-4">
       <form onSubmit={handleSubmit(onSubmit)}>

      <div className="row">
       
         <div className=" col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-6 mt-2">
           <input 
             type="text"
             name="name" 
             className="form-control"
             placeholder="Nombre"
             {...register("firstName", {
              required: true,
              maxLength: 20,
              minLength:2,
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors?.firstName?.type === "required" && <p className="text-danger text-small d-block mb-2 text-small d-block mb-2">*Este campo es obligatorio.</p>}
          {errors?.firstName?.type === "maxLength" && <p className="text-danger text-small d-block mb-2 text-small d-block mb-2">*Maximo 20 caracteres validos</p>}
          {errors?.firstName?.type === "minLength" && <p className="text-danger text-small d-block mb-2 text-small d-block mb-2">*Minimo 2 caracteres validos</p>}
          {errors?.firstName?.type === "pattern" && <p className="text-danger text-small d-block mb-2 text-small d-block mb-2">*Caracter no valido</p>}
         </div>

         <div className="col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-6 mt-2">
           <input
               type="text"
               name="surname" 
               className="form-control"
               placeholder="Apellido"
               {...register("surname", {
                required: true,
                maxLength: 30,
                minLength: 2,
                pattern: /^[A-Za-z]+$/i
              })}
            />
            {errors?.firstName?.type === "required" && <p className="text-danger text-small d-block mb-2">*Este campo es obligatorio.</p>}
            {errors?.firstName?.type === "maxLength" && <p className="text-danger text-small d-block mb-2">*Maximo 30 caracteres validos</p>}
            {errors?.firstName?.type === "minLength" && <p className="text-danger text-small d-block mb-2">*Minimo 2 caracteres validos</p>}
            {errors?.firstName?.type === "pattern" && <p className="text-danger text-small d-block mb-2">*Caracter no valido</p>}
         </div>
         

         <div className="col-sm-12 col-md-12	col-lg-12	col-xl-12	col-xxl-12 mt-2">
           <input 
              type="email" 
              name="email" 
              className="form-control" 
              placeholder="Ingrese un E-mail"
              {...register("email", {
                required: true,   
              })}
            />
            {errors?.email?.type === "required" && <p className="text-danger text-small d-block mb-2">*Este campo es obligatorio.</p>}
               
         </div>

         <div className="col-sm-12 col-md-12	col-lg-12	col-xl-12	col-xxl-12 mt-4">
           <input 
             type="tel"
             name="tel"
             className="form-control"
             placeholder="Telefono sin espacios ni guiones"
             {...register("tel", {
              pattern:/^([0-9])*$/
              
            })}
          />
          {errors?.tel?.type === "pattern" && <p className="text-danger text-small d-block mb-2">*Caracter no validos</p>}       
         </div>

         <div className="col-sm-12 col-md-12	col-lg-12	col-xl-12	col-xxl-12 mt-4 mb-4">
             <textarea 
                 className="form-control"
                 id="exampleFormControlTextarea1" 
                 placeholder="Escribe aqui tu consulta.."
                 rows="6"
                 name="textarea"
                 {...register("textarea", {
                  required: true,
                  maxLength: 500,
                  minLength: 10
                })}
              />
              {errors?.textarea?.type === "required" && <p className="text-danger text-small d-block mb-2">*Este campo es obligatorio.</p>}
              {errors?.textarea?.type === "maxLength" && <p className="text-danger text-small d-block mb-2">Maximo 500 caracteres validos</p>} 
              {errors?.firstName?.type === "minLength" && <p className="text-danger text-small d-block mb-2">*Cuentanos un poco mas</p>} 
         </div>

         <div >
             <button type="submit" className="btn btn-primary">Enviar</button>    
         </div>
       </div>
     </form>
    </div>
   </div>   
              <div>
                    <WhatsAppIcon/>
                    <DemoFooter/>  
              </div>
      
      </div>
  );
}

export default Contacts;