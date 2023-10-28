import React from 'react'

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Viktor</p>

          <h1 className="hero--section--titile">
            <span className="hero--section-title--color">
              Frontend
            </span>{" "}
            <br />
            Developer
          </h1>

          <p className="hero--section-description">
            Frontend Developer with over 1 year experience
          </p>

          <br /> Another come text to be showed
          
        </div>

        <button className="btn btn-primary">Get in Touch</button>
      </div>

      <div className="hero--section--img">
        <img src="/img/hero_img.png" />
      </div>
    </section>
  )
}

export default HeroSection
