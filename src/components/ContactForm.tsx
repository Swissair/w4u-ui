const ContactForm = () => {
  return (
    <form action="#" className="contact-form">
      <div className="row form-group">
        <div className="col-md-12 mb-3 mb-md-0">
          <label className="font-weight-bold" htmlFor="fullname">
            Imię i Nazwisko
          </label>
          <input
            type="text"
            id="fullname"
            className="form-control"
            placeholder="Imię i Nazwisko"
          />
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          <label className="font-weight-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Adres email"
          />
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          <label className="font-weight-bold" htmlFor="subject">
            Tytuł
          </label>
          <input
            type="text"
            id="subject"
            className="form-control"
            placeholder="Tytuł"
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="font-weight-bold" htmlFor="message">
            Wiadomość
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={5}
            className="form-control"
            placeholder="Jestem zainteresowany pobytem od ... do ..."
          ></textarea>
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <input
            type="submit"
            value="Wyślij wiadomość"
            className="btn btn-primary py-3 px-4"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
