import { Wrapper } from "./wrapper";

const Features = () => {
  return (
    <Wrapper>
      <section className="py-16">
        <h2 className="text-3xl font-extrabold font-pluto-bold text-[#FD3F34]">
          Características Destacadas
        </h2>
        <p className="text-lg leading-relaxed font-bold text-[#353232] mb-8 ">
          Lo que nuestra plataforma ofrece
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="bg-white p-6 text-center">
              <img
                src="/images/feature1.png"
                alt="Feature 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-left">
                Integración de Datos
              </h3>
              <p className="mt-2 text-[#8B8F92] text-left">
                Consolida información de diversos sistemas en un solo lugar,
                permitiéndote tener una visión completa y detallada.
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="bg-white p-6 text-center">
              <img
                src="/images/feature1.png"
                alt="Feature 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-left">
                Visualización Avanzada
              </h3>
              <p className="mt-2 text-[#8B8F92] text-left">
                Utiliza gráficos interactivos, tablas dinámicas, dashboards
                personalizados y mapas detallados para comprender la información
                de manera clara y efectiva.
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="bg-white p-6 text-center">
              <img
                src="/images/feature1.png"
                alt="Feature 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-left">
                Interfaz Intuitiva
              </h3>
              <p className="mt-2 text-[#8B8F92] text-left">
                Disfruta de un diseño amigable y una navegación sencilla, que te
                permite acceder a la información que necesitas rápidamente y sin
                complicaciones.
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="bg-white p-6 text-center">
              <img
                src="/images/feature1.png"
                alt="Feature 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-left">
                Seguridad de Datos
              </h3>
              <p className="mt-2 text-[#8B8F92] text-left">
                Protegemos tus datos sensibles con medidas de seguridad
                avanzadas, garantizando la confidencialidad y la integridad de
                la información.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Features;
