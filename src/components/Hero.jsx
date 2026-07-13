import NextLink from "./NextLink";
// import heroVideo from "../../public/videos/construction.mp4"; 

const Hero = () => {
  return (
    <section>
      <div
        className="swiper-container hero position-relative overflow-hidden"
        style={{
          minHeight: "90vh",
          width: "100%",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="container h-100 d-flex justify-content-center align-items-center position-relative z-2">
          <div className="row justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="fs-56 ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s oswald">
                Civil Contractor in Melur, Madurai &amp; Coimbatore
              </h1>

              <p className="fs-26 text-white mb-5 animate__animated animate__zoomIn animate__delay-2s roboto">
                Residential, commercial and civil construction delivered with
                quality, safety and care.
              </p>

              <div className="d-inline animate__animated animate__slideInUp animate__delay-3s">
                <NextLink
                  title="Know More"
                  href="/about-us"
                  className="btn btn-sm primary-bg text-white rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
