import Head from 'next/head';

const ContactUs = () => (
  <>
    <Head>
      <title>Contact VVK Construction | Request a Consultation</title>
      <meta
        name="description"
        content="Contact VVK Construction to discuss your residential, commercial, renovation, or civil construction requirements."
      />
    </Head>
    <main className="content-wrapper">
      <section className="wrapper bg-light">
        <div className="container py-12 py-md-14 text-center">
          <h1 className="display-4 mb-3 oswald">Let&apos;s Build Together</h1>
          <p className="lead mb-0 roboto">Tell us about your construction project and we&apos;ll be glad to help.</p>
        </div>
      </section>
      <section className="wrapper">
        <div className="container py-12 py-md-14">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg">
                <div className="card-body p-7 p-md-10 text-center">
                  <h2 className="fs-28 oswald">Contact VVK Construction</h2>
                  <p className="roboto">For a consultation or estimate, call or email our team.</p>
                  <p className="mb-0 roboto"><strong>Address:</strong> VVK Constructions, 75, Sivagangai Road,</p>
                  <p className="mb-2 roboto">Opposite to ganesh fuels, Melur, Madurai – 625106.</p>
                  <p className="mb-2 roboto">
                    <strong>Phone:</strong> <a href="tel:+919597848123">+91 9597848123</a>
                  </p>
                  <p className="mb-0 roboto">
                    <strong>Email:</strong> <a href="mailto:info.vvkconstructions@gmail.com">info.vvkconstructions@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default ContactUs;
