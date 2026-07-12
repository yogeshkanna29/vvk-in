import Head from "next/head";
import NextLink from "components/NextLink";

const services = [
  {
    title: "Quality Residential and Commercial Construction",
    icon: "uil uil-building",
  },
  {
    title: "On-Time Project Delivery with Reliable Execution",
    icon: "uil uil-clock",
  },
  {
    title: "Strong Focus on Safety, Quality, and Durability",
    icon: "uil uil-shield-check",
  },
  {
    title: "Transparent Agreements and Cost-Effective Solutions",
    icon: "uil uil-file-check",
  },
  {
    title: "Fast, Professional, and Skilled Workmanship",
    icon: "uil uil-hard-hat",
  },
  {
    title: "Advanced RCC Structures and Concrete Solutions",
    icon: "uil uil-constructor",
  },
  {
    title: "Smart Rainwater Harvesting and Sustainable Practices",
    icon: "uil uil-cloud-rain",
  },
  {
    title: "Innovative Terrace Gardening and Green Building Solutions",
    icon: "uil uil-cloud-sun",
  },
];

const Services = () => (
  <>
    <Head>
      <title>Construction Services | VVK Construction</title>
      <meta
        name="description"
        content="Explore VVK Construction services including residential construction, commercial projects, RCC works, renovation, sustainable solutions, and civil engineering services."
      />
    </Head>

    <main className="content-wrapper">

      {/* Header Section */}
      <section className="wrapper bg-light">
        <div className="container py-12 py-md-14 text-center">
          <h1 className="display-4 mb-3 oswald">
            Our Construction Services
          </h1>

          <p className="lead mb-0 roboto">
            Professional construction solutions from planning and design to
            final handover.
          </p>
        </div>
      </section>


      {/* Services Cards */}
      <section className="wrapper">
        <div className="container py-12 py-md-14">

          <div className="row gy-5 justify-content-center">

            {services.map((service) => (
              <div
                className="col-md-6 col-lg-4"
                key={service.title}
              >

                <div className="card shadow-lg h-100 border-0 service-card">

                  <div className="card-body p-6 text-center">

                    <div className="service-icon mb-4">
                      <i
                        className={`${service.icon} text-main fs-32`}
                      />
                    </div>


                    <h2 className="fs-22 mb-0 oswald">
                      {service.title}
                    </h2>


                  </div>

                </div>

              </div>
            ))}

          </div>


          {/* CTA Button */}
          <div className="text-center mt-10">

            <NextLink
              href="/contact-us"
              title="Request a Consultation"
              className="btn primary-bg text-white rounded px-5 py-3"
            />

          </div>


        </div>
      </section>

    </main>
  </>
);

export default Services;