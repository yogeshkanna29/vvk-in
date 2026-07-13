const getBaseUrl = (req) => {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${protocol}://${host}`;
};

export async function getServerSideProps({ req, res }) {
  const baseUrl = getBaseUrl(req);
  const pages = ['', '/about-us', '/services', '/projects', '/contact-us'];
  const urls = pages
    .map((path) => `<url><loc>${baseUrl}${path}</loc></url>`)
    .join('');

  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
