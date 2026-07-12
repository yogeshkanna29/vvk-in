import Head from 'next/head';
import About from 'components/About';

const AboutUs = () => (
  <>
    <Head>
      <title>About VVK Construction | Building with Care</title>
      <meta name="description" content="Learn about VVK Construction, our commitment to quality workmanship, transparent communication, and dependable project delivery." />
    </Head>
    <main className="content-wrapper">
      <section className="wrapper bg-light">
        <div className="container py-12 py-md-14 text-center">
          <h1 className="display-4 mb-3 oswald">About VVK Construction</h1>
          <p className="lead mb-0 roboto">Reliable construction solutions, built around your vision.</p>
        </div>
      </section>
      <section className="wrapper">
        <div className="container py-12 py-md-14">
          <About
            subHeading="WHO WE ARE"
            heading="Your trusted construction partner"
            para="VVK Construction provides residential, commercial, renovation, and civil construction services. We bring practical planning, skilled workmanship, and clear coordination to every project."
            para2="Our focus is simple: understand your requirements, build with quality materials and safe practices, and deliver a space you can be proud of."
            imgPosition="right"
            src="/img/house.png"
            btnTitle="View Our Projects"
            btnUrl="/projects"
          />
        </div>
      </section>
    </main>
  </>
);

export default AboutUs;
