import { Wrapper } from "./wrapper";

const ExplorePrograms = () => {
  return (
    <section className="py-16 bg-gray-100">
      <Wrapper>
        <h2 className="text-3xl text-center font-extrabold font-pluto-bold text-[#FD3F34]">
          Explora Programas Sociales
        </h2>
        <p className="text-lg text-center leading-relaxed font-bold text-[#353232] mb-14">
          Encuentra y gestiona programas sociales fácilmente
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="w-1/2 md:w-1/4 py-8 bg-white rounded-3xl">
            <img
              src="/images/program1.jpg"
              alt="Programa 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-4 text-lg px-8">
              Yo construyo mi futuro mejor
            </h3>
            <p className="mt-2 text-base px-8">
              El proyecto consiste en rescatar niños/as, jóvenes/as sometidos
              por la drogadicción.
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 py-8 bg-white rounded-3xl">
            <img
              src="/images/program1.jpg"
              alt="Programa 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-4 text-lg px-8">
              Migrante retornado (Tu casa es Honduras)
            </h3>
            <p className="mt-2 text-base px-8">
              El proyecto consiste en atender migrantes retornados con el
              propósito de brindar asistencia social a través de la coordinación
              de
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 py-8 bg-white rounded-3xl">
            <img
              src="/images/program1.jpg"
              alt="Programa 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-4 text-lg px-8">Educar para liberar</h3>
            <p className="mt-2 text-base px-8">
              Este proyecto tiene como objetivo brindar asistencia social a los
              niños y niñas en situación de vulnerabilidad, efectuando acciones
              encaminada a la no dese
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 py-8 bg-white rounded-3xl">
            <img
              src="/images/program1.jpg"
              alt="Programa 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-4 text-lg px-8">
              Cultivando oportunidades
            </h3>
            <p className="mt-2 text-base px-8">
              El Proyecto Cultivando Oportunidades que impulsa el Programa de
              Acción Solidaria (PROASOL) consiste en apoyar con beneficios a las
              personas de los dif
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 py-8 bg-white rounded-3xl">
            <img
              src="/images/program1.jpg"
              alt="Programa 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-4 text-lg px-8">
              Comedores Solidarios
            </h3>
            <p className="mt-2 text-base px-8">
              Estrategia de combate a la pobreza y pobreza extrema en el ámbito
              rural y urbano. "Los comedores solidarios son estru
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 py-8 bg-white rounded-3xl">
            <img
              src="/images/program1.jpg"
              alt="Programa 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-4 text-lg px-8">
              Infraestructura Social y Medio Ambiente{" "}
            </h3>
            <p className="mt-2 text-base px-8">
              Hogares recibiendo mejoras de infraestructura básica y saneamiento
              a sus viviendas
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ExplorePrograms;
