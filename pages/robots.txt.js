const getBaseUrl = (req) => {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${protocol}://${host}`;
};

export async function getServerSideProps({ req, res }) {
  const baseUrl = getBaseUrl(req);
  res.setHeader('Content-Type', 'text/plain');
  res.write(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}
