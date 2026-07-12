import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { usefulLinks } from '../data.js';
// import vvkLogo from '../assets/images/vvkLogo';

/**
 * Widget component renders a titled list of links
 * @param {Array} list - Array of link objects { id, url, title }
 * @param {string} title - Widget title
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ id, title, url }) => (
        <li key={id} className="roboto">
          <NextLink href={url} title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top footer-bg overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Logo and Company Description */}
          <div className="col-xl-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-5 d-flex justify-content-md-center justify-content-xxl-start w-100">
                <Image
                  src={'/img/vvklogo.png'}
                  alt="Logo | vvk construction"
                  width={200}
                  height={80}
                  unoptimized={true} // Prevents Next.js image optimization
                  className="text-center"
                />
              </div>
              <p className="lead mb-2 text-md-center text-xl-start fs-18 roboto">
                vvk construction is a trusted residential construction company in Location, delivering high-quality,
                innovative, and reliable home-building solutions.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="d-flex align-items-xl-start align-items-md-center flex-column">
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Quick Links Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <Widget list={usefulLinks} title="Quick Links" />
          </div>

          {/* Contact Information Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Contact Us</h4>

              {/* Address */}
              <div className="d-flex mb-3 align-items-start">
                <i className="uil uil-location-pin-alt fs-30 text-main" />
                <address className="ms-2 m-0 mt-1 roboto">
                  VVK Constructions, 75, Sivagangai Road, Opposite to ganesh fuels, Melur, Madurai – 625106.
                </address>
              </div>

              {/* Email */}
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-main" />
                <a href="mailto:info.vvkconstructions@gmail.com" className="link-body ms-2 roboto">
                  info.vvkconstructions@gmail.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26 text-main" />
                <p className="mt-1 ms-2 fs-18 d-flex flex-column roboto">
                  <a href="tel:+919597848123">+91 9597848123</a>
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Google Map</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.863252351181!2d78.33961697540208!3d10.028141472549105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00eb685608da3b%3A0xfd4835527228fc2c!2sVVK%20Constructions!5e0!3m2!1sen!2sus!4v1783884513611!5m2!1sen!2sus"
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </div>
          </div>

          {/* Horizontal separator */}
          <hr className="mt-4 mt-md-4 mb-7" />

          {/* Footer copyright */}
          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-2 mb-lg-0 text-center roboto">© {currentYear} vvk construction. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
