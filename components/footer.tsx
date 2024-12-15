const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-10">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="md:w-1/3">
          <img
            width={165}
            height={78}
            src="/images/suiss.png"
            alt="Suiss logo"
            className="mb-4 w-[165px]"
          />
          <p className="poppins-regular">
            <strong>Tel:</strong> (+504) 2242-7981 Ext: 11101
          </p>
          <p className="poppins-regular">
            <strong>Email:</strong> transparencia@sedesol.gob.hn
          </p>
          <p className="poppins-regular">
            <strong>Horario:</strong> 8:00 a.m. – 4:00 p.m.
          </p>
          <div className="text-sm mt-10">
            <p className="poppins-regular">
              © 2024 suiss.com. All rights reserved.
            </p>
            <div className="space-x-4 mt-2">
              <a href="#" className="hover:underline poppins-regular">
                Políticas de Privacidad
              </a>
              <a href="#" className="hover:underline poppins-regular">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <nav className="space-x-6">
            <a href="#" className="text-base font-pluto-medium">
              INICIO
            </a>
            <a href="#" className="text-base font-pluto-medium">
              PROGRAMAS
            </a>
            <a href="#" className="text-base font-pluto-medium">
              INSTITUCIONES
            </a>
            <a href="#" className="text-base font-pluto-medium">
              CÓMO FUNCIONA
            </a>
          </nav>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.829287293875!2d-87.20029178572533!3d14.075752090113787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa42c13a19f5d%3A0x95e792cd032f8e1f!2sCentro%20C%C3%ADvico%20Gubernamental%2C%20Torre%202%2C%20Tegucigalpa%2C%20Honduras!5e0!3m2!1sen!2s!4v1622059814064!5m2!1sen!2s"
              width="100%"
              height="150"
              loading="lazy"
              className="border-0"
            />
            <p className="mt-2 text-sm font-medium poppins-regular">
              SEDESOL - Centro Cívico Gubernamental, Torre 2, Tegucigalpa,
              Honduras, CA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
