import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import StaySelector from "./StaySelector";
import ContactForm from "./ContactForm";

const Contact = () => {
  const sendEnquiry = async () => {};

  return (
    <>
      <div
        className="site-blocks-cover inner-page-cover overlay"
        // style="background-image: url('images/hero_bg_boats_1b.jpg');"
        style={{
          backgroundImage: `url("/images/hero_bg_boats_1b.jpg?url")`,
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-7 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="text-white">Skontaktuj się</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <StaySelector />

      <div className="site-section border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-7 mb-5">
              <ContactForm />
            </div>

            <div className="col-lg-4 ml-auto">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Dane kontaktowe</h3>
                <p className="mb-0 font-weight-bold text-black">Adres</p>
                <p className="mb-4 text-black">Wakacje 4U Piotr Skirski</p>

                <p className="mb-0 font-weight-bold text-black">Telefon</p>
                <p className="mb-4">
                  <a href="#">(+48) 788795764</a>
                </p>

                <p className="mb-0 font-weight-bold text-black">Email</p>
                <p className="mb-0">
                  <a href="mailto:wakacje4u@gmail.com">wakacje4u@gmail.com</a>
                </p>
              </div>

              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3 text-black">
                  Informacje dodatkowe
                </h3>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  ad iure porro mollitia architecto hic consequuntur. Distinctio
                  nisi perferendis dolore, ipsa consectetur
                </p>
                <p>
                  <a href="#" className="btn btn-primary  py-2 px-4">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
