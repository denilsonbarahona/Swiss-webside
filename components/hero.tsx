import { Wrapper } from "./wrapper";

const Hero = () => {
  return (
    <section className="bg-white text-center py-16">
      <Wrapper>
        <h1 className="text-6xl font-extrabold text-red-500 font-pluto-bold">
          Bienvenidos a SUISS:{" "}
          <span className="text-[#52CCDE]">
            Sistema Único de Información del Sector Social
          </span>
        </h1>
        <p className="mt-4 text-xl font-bold">
          SIMPLIFICA LA GESTIÓN DE PROGRAMAS SOCIALES
        </p>
        <p className="mt-4 text-sm text-[#8B8F92]">
          Accede a toda la información de programas sociales en una plataforma
          unificada.
        </p>
        <div className="mt-6">
          <button className="bg-red-500 text-white px-6 py-2 rounded mx-2 rounded-[40px]">
            Explorar Programas
          </button>
          <button className="border border-red-500 text-black px-6 py-2 rounded mx-2 rounded-[40px]">
            Solicitar Demo
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
