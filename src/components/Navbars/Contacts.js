import React from 'react'
import IndexNavbar2 from "components/Navbars/IndexNavbarSecondary.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import WhatsAppIcon from 'components/WhatsAppIcon/WhatsAppIcon'
import '../../assets/css/paper-kit.css'

const Contacts = () => {
  React.useEffect(()=>{
    document.title = 'Contactos'
  })

    return (
      <div>
        <div className="container">
            <IndexNavbar2/>

            <br/><br/><br/><br/>
            <div className="container text-center">
            <h3>CONTACTANOS</h3>
            </div>
            
            <div className="pt-5 col-sm-12	col-md-12 col-lg-12	col-xl-6 textGuiaTime">
            <p>Lunes a Viernes de 9:0 a 13:00 hs y de 14:00 a 16:00 hs / Sábados de 9 a 13:00 hs</p>
            <p>+54 9 11 3189-6414</p>
            <p>SillonesFB@Gmail.com</p>
            <p>San Ramon 6128 entre Monaco y Mar del Plata - Villa Ballester, San Martin</p>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13142.907535889204!2d-58.56581055122808!3d-34.560469882971525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91965d37910cbbe9!2sFabrica%20De%20Sillones!5e0!3m2!1ses!2sar!4v1623356598124!5m2!1ses!2sar" 
            className="mapStyles"
            title="hola" 
            width="600" 
            height="400" 
            loading="lazy">
            </iframe>     
            </div>
            
            <div className="pt-5 col-sm-12	col-md-12 col-lg-6 col-xl-6">
              <form>
              <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Nombre</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
              </div>
              <div className="form-group">
              <label htmlFor="exampleFormControlInput1">mail</label>
              <input type="mail" className="form-control" id="exampleFormControlInput1"/>
              </div>
              <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Telefono</label>
              <input type="tel" className="form-control" id="exampleFormControlInput1"/>
              </div>
              <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Escribe tu mensaje</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="14"></textarea>
              </div>
              </form>
            <button className="btn btn-dark">Enviar</button>
          </div>  
        </div>
                  <div>
                    <WhatsAppIcon/>
                    <DemoFooter/>  
                  </div>
      </div>
            )
          }
          
          export default Contacts
          