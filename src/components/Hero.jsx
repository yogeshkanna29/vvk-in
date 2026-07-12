import NextLink from "./NextLink";
import heroImage from "../assets/images/hero1.jpeg";

const Hero = () => {
  return (
    <section>
      <div
        className="swiper-container hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "90vh",
          width: "100%",
        }}
      >
        <div className="overlay"></div>

        <div className="container h-100 d-flex justify-content-center align-items-center position-relative z-2">
          <div className="row justify-content-center align-items-center">
            <div className="text-center">
              <h3 className="fs-56 ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s oswald">
                VVK Construction: Building Stronger Spaces
              </h3>

              <p className="fs-26 text-white mb-5 animate__animated animate__zoomIn animate__delay-2s roboto">
                Residential, commercial, and civil construction delivered with
                quality, safety, and care.
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