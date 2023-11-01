export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/*<p className="section--title">About</p>*/}
            <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            As a Frontend Developer with over one year of commercial experience, I ve
            gained proficiency in React, TypeScript, HTML, and CSS. I m passionate
            about crafting exceptional user interfaces and have developed a deep
            understanding of web development principles.
          </p>
          <p className="hero--section-description">
            In a dynamic startup environment, I have enthusiastically embraced change
            and rapidly acquired proficiency in new technologies, including React and
            Sass. My collaboration is seamless with cross functional teams, such as
            developers, Q&A specialists, and designers.
          </p>
        </div>
      </div>
    </section>
  );
}
