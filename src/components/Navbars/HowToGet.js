import React from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import WhatsAppIcon from 'components/WhatsAppIcon/WhatsAppIcon'
import '../../assets/css/paper-kit.css'
const HowToGet = () => {
    return (
        <div className="container text-center ml-auto mr-auto">
            <IndexNavbar/>
            <div className="mt-5">
                <h3>COMO LLEGAR</h3>
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
        <DemoFooter/>
        <WhatsAppIcon/>
    </div>         
    )
}

export default HowToGet
