import { Wrapper } from "./wrapper";

const About = () => {
  return (
    <Wrapper>
      <section className="py-16 flex flex-col md:flex-row gap-4 items-center">
        <div>
          <h2 className="text-3xl font-extrabold font-pluto-bold text-[#FD3F34]">
            Sobre SUISS
          </h2>
          <p className="text-lg leading-relaxed font-bold text-[#353232] mb-8 ">
            Facilitando la gestión eficiente de programas sociales
          </p>
          <div className="max-w-4xl grid gap-4">
            <p className="text-lg leading-relaxed font-medium text-[#8B8F92]">
              SUISS es una herramienta oficial del gobierno de Honduras,
              desarrollada por la Secretaría de Desarrollo Social. Esta
              plataforma centraliza toda la información relevante sobre
              programas sociales, integrando datos de múltiples fuentes para
              ofrecer una experiencia unificada y eficiente.
            </p>
            <p className="text-lg leading-relaxed font-medium text-[#8B8F92]">
              Con SUISS, las instituciones pueden gestionar, analizar y
              visualizar la información de manera efectiva, facilitando la toma
              de decisiones informadas.
            </p>
          </div>
        </div>
        <img src="/images/suiss-cycle.png" />
      </section>
    </Wrapper>
  );
};

export default About;
