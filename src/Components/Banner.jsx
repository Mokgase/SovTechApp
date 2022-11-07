import React, { Component } from 'react'
import geekLogo from '../Components/public/image/geekLogo.png';




class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={geekLogo}  width="170" height="170" alt="profilepic"/></a>
                    <h1>Hello I am Thapelo Mokgase Mmakola. </h1>
                    <h1>A Human,Student,and Aspiring full stack developer.</h1>
                    <p id="paragarph1">I want to become a developer at SovTech because I know I would grow immensely in that company,
                                    be a good cultural fit, as I align with most of the spex,
                                    to name a few like Adapt, Results, Tech, and Blitz, 
                                    and lastly because I'm interested in the company's tech stack, 
                                    and graduation programme being provided there, and how it would help me in becoming a better developer,
                                    and in return becoming an assest to SovTech.
                    </p> <br/> 
                    <br/>
                    
            </section>
        )
    }
}

export default Banner


