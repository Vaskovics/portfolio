import data from "../../data/index.json";

export default function MyPortfolio() {
  const handleGitHubBtn = () => {
    window.open('https://github.com/Vaskovics/', '_blank');
  }
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={handleGitHubBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z"
                fill="currentColor"
              />
            </svg>
            Visit My GitHub
          </button>
        </div>
      </div>
      
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <a href={item.site} target="_blank">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </div>
            </a>

            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>

              <a href={item.link} target="_blank" className="portfolio--link">
                <p className="text-sm">
                  
                  <svg
                  style={{ paddingRight: '8px' }}
                  height="1.5rem"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  class="svg-inline--fa fa-github fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M245.6 9.9C109.9 9.9 0 119.4 0 255.2c0 112.7 73.1 208.3 174.7 242.6 12.8 2.4 17.5-5.6 17.5-12.3 0-6.1-.2-26.4-.3-47.9-71.1 15.5-86.2-34.3-86.2-34.3-11.6-29.4-28.3-37.2-28.3-37.2-23.2-15.9 1.8-15.6 1.8-15.6 25.6 1.8 39.1 26.3 39.1 26.3 22.8 39.1 59.8 27.8 74.4 21.2 2.3-16.5 8.9-27.8 16.2-34.2-56.5-6.4-116.2-28.2-116.2-125.2 0-27.7 9.9-50.4 26.2-68.2-2.6-6.4-11.4-32.3 2.5-67.4 0 0 21.5-6.9 70.4 26.1 20.4-5.7 42.3-8.5 64-8.6 21.7.1 43.6 2.9 64 8.6 48.9-33 70.3-26.1 70.3-26.1 14 35.1 5.2 61 2.6 67.4 16.4 17.8 26.1 40.5 26.1 68.2 0 97.2-59.8 118.7-116.6 125 9.2 7.8 17.4 23.3 17.4 47 0 34 0 61.4 0 69.8 0 6.8 4.6 14.8 17.6 12.2C422.9 463.4 496 367.8 496 255.2c0-135.8-109.9-245.3-245.6-245.3"
                  ></path>
                  
                </svg>
                View on GitHub:  
              </p>
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
