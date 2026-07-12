import Head from 'next/head';

const ContactUs = () => (
  <>
    <Head>
      <title>Contact VV Construction | Request a Consultation</title>
      <meta name="description" content="Contact VV Construction to discuss your residential, commercial, renovation, or civil construction requirements." />
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
                  <h2 className="fs-28 oswald">Contact VV Construction</h2>
                  <p className="roboto">For a consultation or estimate, call or email our team.</p>
                  <p className="mb-2 roboto"><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
                  <p className="mb-0 roboto"><strong>Email:</strong> <a href="mailto:vvconstruction@gmail.com">vvconstruction@gmail.com</a></p>
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
