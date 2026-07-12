import Head from 'next/head';
import NextLink from 'components/NextLink';

const services = [
  'Residential construction',
  'Commercial construction',
  'Renovation and remodeling',
  'Civil works and site development',
  'Project planning and management'
];

const Services = () => (
  <>
    <Head>
      <title>Construction Services | VV Construction</title>
      <meta name="description" content="Explore VV Construction services for residential and commercial construction, renovation, civil works, and project management." />
    </Head>
    <main className="content-wrapper">
      <section className="wrapper bg-light">
        <div className="container py-12 py-md-14 text-center">
          <h1 className="display-4 mb-3 oswald">Our Services</h1>
          <p className="lead mb-0 roboto">Construction support from the first idea to final handover.</p>
        </div>
      </section>
      <section className="wrapper">
        <div className="container py-12 py-md-14">
          <div className="row gy-4 justify-content-center">
            {services.map((service) => (
              <div className="col-md-6 col-lg-4" key={service}>
                <div className="card shadow-lg h-100">
                  <div className="card-body p-6">
                    <i className="uil uil-check-circle text-main fs-28" />
                    <h2 className="fs-22 mt-3 mb-0 oswald">{service}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <NextLink href="/contact-us" title="Request a Consultation" className="btn primary-bg text-white rounded" />
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Services;
