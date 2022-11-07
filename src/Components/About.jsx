import React, { Component } from 'react'
import aboutMe from './public/image/aboutMe.png'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={aboutMe} width="180" height="180" alt="aboutMe"/>
                    <p>I am a student at WeThinkCode_, studying software develpmet, and completeing my final academic year.I have completed a Higher Certificate in IT(Information Technology) through Eduvos, previously known as Pearson Institute of Higher Education which I completed in 2019. I have experience coding in Java, Python, JavaScript, Html & CSS,I'm aspiring, and working towards becoming a fullstack developer, and currently passionate about learning more about mobile/web development, and app maintenance.<br/>
                    <br/>                       
                    </p>
                
            </section>
        )
    }
}

export default About
