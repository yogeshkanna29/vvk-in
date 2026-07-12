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
            content="VVK Construction delivers dependable residential and commercial construction, renovation, project management, and quality workmanship in your area."
          />
          <meta name="keywords" content="VVK Construction, construction company, building contractor, residential construction, commercial construction, renovation, civil construction, project management" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="VVK Construction" />

          {/* Open Graph tags for social sharing */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="VVK Construction" />
          <meta property="og:title" content="VVK Construction | Built with Quality and Care" />
          <meta
            property="og:description"
            content="Residential and commercial construction, renovations, and reliable project delivery by VVK Construction."
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
                description: 'Residential and commercial construction, renovations, civil works, and project management.',
                areaServed: 'Your service area',
                email: 'info.vvkconstructions@gmail.com',
                telephone: '+91 98765 43210'
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
