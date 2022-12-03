import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import linkedIn from '../Components/public/image/linkedIn.png';



class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Thapelo Mokgase Mmakola</strong></h3>
                <a id="mail "href="https://mail.google.com/mail/?view=cm&fs=1&to=tmmakola021@student.wethinkcode.co.za">How do you take your coffee?</a>
                <h4>Contant Info: +27 678 787 907</h4>

       
                        <a href="https://github.com/Mokgase">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/thapelo-mmakola-7772201ab/"><img id="linkedinIcon" src={linkedIn} width="80" height="80" alt="linkedInlogo"/>
                        </a>
                
            </section>
        )
    }
}

export default Contact
