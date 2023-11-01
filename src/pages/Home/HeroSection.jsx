export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Viktor</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Developing expertise as a junior front-end developer, 
            <br /> I've accumulated over a year of experience 
            <br /> in crafting responsive and dynamic web applications.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
