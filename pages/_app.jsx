import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

// Import global styles and third-party CSS
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Dynamically import Bootstrap JS on client-side only (to avoid SSR issues)
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // Initialize scrollCue plugin on route change
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8
      });
      scrollCue.update();
    })();
  }, [pathname]);

  // Disable loading state once component mounts
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
        <Head>
          {/* Basic meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>VVK Construction | Residential & Commercial Construction</title>
          <meta
            name="description"
            content="VVK Construction is a civil contractor for residential, commercial, renovation and RCC work in Melur, Madurai and Coimbatore."
          />
          <meta name="keywords" content="civil contractor Melur, construction company Madurai, building contractor Madurai, construction company Coimbatore, residential construction, commercial construction, RCC work, home renovation" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="VVK Construction" />

          {/* Open Graph tags for social sharing */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="VVK Construction" />
          <meta property="og:title" content="VVK Construction | Built with Quality and Care" />
          <meta
            property="og:description"
            content="Civil construction, home building, commercial projects and renovations in Melur, Madurai and Coimbatore."
          />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="VVK Construction | Built with Quality and Care" />
          <meta
            name="twitter:description"
            content="Explore VVK Construction's residential, commercial, renovation, and civil construction services."
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'GeneralContractor',
                name: 'VVK Construction',
                description: 'Civil contractor providing residential construction, commercial construction, renovations, RCC work and project management in Melur, Madurai and Coimbatore.',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '75, Sivagangai Road, Opposite Ganesh Fuels',
                  addressLocality: 'Melur',
                  addressRegion: 'Tamil Nadu',
                  postalCode: '625106',
                  addressCountry: 'IN'
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 10.028141472549105,
                  longitude: 78.33961697540208
                },
                areaServed: [
                  { '@type': 'City', name: 'Melur' },
                  { '@type': 'City', name: 'Madurai' },
                  { '@type': 'City', name: 'Coimbatore' }
                ],
                email: 'info.vvkconstructions@gmail.com',
                telephone: '+91 95978 48123',
                sameAs: [
                  'https://www.instagram.com/vvkconstructions/',
                  'https://www.facebook.com/vvk.constructions.9',
                  'https://www.linkedin.com/in/vivek-anand-b0bb68bb'
                ]
              })
            }}
          />
        </Head>
        <ThemeProvider>
          <Layout>
            {/* Show loader while app is loading */}
            {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
          </Layout>
        </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
