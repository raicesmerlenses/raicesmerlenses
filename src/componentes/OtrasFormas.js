import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "paginaDeRaices",
        "template_b28a33g",
        e.target,
        "user_74xNSkjScfhNS3fENKv46"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (  
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <h1 className="mx-auto md-auto xs-auto ">Coordinemos la donacion<span role="img" aria-label="Por Favor" aria-labelledby="Please" >🙏</span></h1>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              {" "}
              <b>Forma en que desea colaborar</b> <br />
              <select required className="form-control" name="subject">
                <option value="" disabled selected></option>
                <option value="Ropa y Calzado">Ropa y Calzado</option>
                <option value="Logistica y Transporte">
                  Logistica y Transporte
                </option>
                <option value="Alimentos">Alimentos</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="tu mensaje"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Enviar Mensaje"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
