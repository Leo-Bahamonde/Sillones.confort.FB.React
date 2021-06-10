import React from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import WhatsAppIcon from 'components/WhatsAppIcon/WhatsAppIcon'
import '../../assets/css/paper-kit.css'
const Contacts = () => {
    return (
        <div className="container text-center">
            <IndexNavbar Style="color: black"/>
            <h3>CONTACTOS</h3>

          <div>
            <h4>CONTACTANOS</h4>
                <p>Lunes a Viernes de 9:0 a 13:00 hs y de 14:00 a 16:00 hs / Sábados de 9 a 13:00 hs</p>
                <p>+54 9 11 3189-6414</p>
                <p>SillonesFB@Gmail.com</p>
                <p>San Ramon 6128 entre Monaco y Mar del Plata - Villa Ballester, San Martin</p>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13142.907535889204!2d-58.56581055122808!3d-34.560469882971525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91965d37910cbbe9!2sFabrica%20De%20Sillones!5e0!3m2!1ses!2sar!4v1623356598124!5m2!1ses!2sar" 
                className="mapStyles"
                title="hola" 
                width="800" 
                height="600" 
                allowfullscreen="" 
                loading="lazy">
            </iframe> 
          </div>
          <div>
            <input type="text" placeholder="Nombre" />
            <input type="mail" placeholder="Correo electronico" />
            <input type="num" placeholder="Telefono" />
            <input type="text" placeholder="Mensaje" />
            <button>Enviar</button>
          </div>
            
            
                
                
                
                
                <DemoFooter/>
                
                <WhatsAppIcon/>
            </div>
    )
}

export default Contacts
