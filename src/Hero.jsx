import React from 'react'
import heroImg from "./assets/hero.svg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>ContentFul CMS</h1>
                    <p>I'm baby fingerstache vice lo-fi edison bulb pickled meditation whatever. Vape cupping lo-fi, tumblr put a bird on it williamsburg shabby chic cronut aesthetic. Mlkshk chambray farm-to-table fit, neutra lo-fi bushwick flexitarian tofu disrupt master cleanse semiotics. Vegan godard dreamcatcher fashion axe, organic hammock ramps hella. Meh jianbing sriracha locavore offal praxis coloring book. Pork belly vegan seitan, ramps roof party scenester 3 wolf moon.</p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="woman and the browser !" className='img'/>
                </div>
            </div>

        </section>
    )
}

export default Hero