import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import NextLink from 'components/NextLink';

const projects = [
  { title: 'Maitreya Villa', category: 'Completed', image: '/img/projects/maitreya.jpg', description: 'Maitreya Villa is one of the most successful residential villa project in the Milestone of VVK constructions. This project in 4000 sq feet which comprises of 4 individual houses together with more special amenities in Superlative quality.Our Company again made the benchmark in completing the whole project within 6 months.Thanks to our Prestigious Client and the Owner of Maitreya villa Mr.P.Sivakumar who made everything easier to move forward in this huge project and thanks to my labour team for very faster sequencial work.We also employed the powerpacked special techniques for it’s strength and durability as well.' },
  { title: 'SPK Home', category: 'Completed', image: '/img/projects/spk.jpg', description: 'SPK Home 2020 is loacted in the vellalore ,outskirt of madurai.This project is mainly for old age people.We customize everything to make easy and safe usage for the old people.It was really the best experience for our team to engaged with the traditional moral values of village people. We completed this whole project in 2 months alone.' },
  { title: 'Diamond Villa', category: 'Completed', image: '/img/projects/diamondvilla.jpg', description: 'A functional space being built for business growth.' },
  { title: 'Home Renovation', category: 'In Progress', image: '/img/welcome-to-constructions.webp', description: 'A practical renovation designed around the family.' }
];

const Projects = () => {
  const [filter, setFilter] = useState('All Projects');
  const visibleProjects = filter === 'All Projects' ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
    <Head>
      <title>Construction Projects | VVK Construction</title>
      <meta name="description" content="Explore the types of residential, commercial, renovation, and civil construction projects delivered by VVK Construction." />
    </Head>
    <main className="content-wrapper">
      <section className="wrapper bg-light">
        <div className="container py-12 py-md-14 text-center">
          <h1 className="display-4 mb-3 oswald">Our Projects</h1>
          <p className="lead mb-0 roboto">A look at the spaces VVK Construction is proud to build.</p>
        </div>
      </section>
      <section className="wrapper">
        <div className="container py-12 py-md-14">
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-9">
            {['All Projects', 'Completed', 'In Progress'].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setFilter(label)}
                className={`btn rounded ${filter === label ? 'primary-bg text-white' : 'btn-outline-primary'}`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="row gy-6">
            {visibleProjects.map((project) => (
              <div className="col-md-6" key={project.title}>
                <article className="card shadow-lg h-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} | VVK Construction project`}
                    width={700}
                    height={450}
                    unoptimized
                    className="card-img-top"
                    style={{ height: '260px', objectFit: 'cover' }}
                  />
                  <div className="card-body p-7">
                    <p className="text-main text-uppercase fs-14 mb-2 oswald">{project.category}</p>
                    <h2 className="fs-24 oswald">{project.title}</h2>
                    <p className="mb-0 roboto">{project.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <NextLink href="/contact-us" title="Discuss Your Project" className="btn primary-bg text-white rounded" />
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Projects;
