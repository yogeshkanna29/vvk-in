import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';

const Home = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>Civil Contractor in Melur, Madurai & Coimbatore | VVK Construction</title>
        <meta name="description" content="VVK Construction provides residential construction, commercial building, RCC work, renovation and civil contracting in Melur, Madurai and Coimbatore." />
        <meta property="og:title" content="Civil Contractor in Melur, Madurai & Coimbatore | VVK Construction" />
        <meta property="og:description" content="Residential, commercial and civil construction services delivered with quality workmanship across Melur, Madurai and Coimbatore." />
      </Head>

      <main className="content-wrapper overflow-hidden">

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Welcome to"
              span="VVK Construction"
              para="VVK Construction is a trusted civil contractor based in Melur, serving homeowners and businesses in Madurai, Coimbatore and nearby Tamil Nadu communities. From the first plan to the final handover, our team manages every stage with care, transparency and attention to detail."
              para2="We provide residential construction, commercial building, renovation, RCC and civil works, and project management tailored to your requirements, budget and timeline."
              imgPosition="left"
              src="/img/building.png"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="wrapper whychoose-bg">
          <div className="container py-14 py-md-16">
            <WhyChoose />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
