import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Wrapper } from "./wrapper";

const HowItWorks = () => {
  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-3xl font-extrabold font-pluto-bold text-[#FD3F34] text-center my-20">
          Cómo Funciona
        </h2>
        <Tabs variant="unstyled">
          <TabList className="flex border-b-2 border-[#C3E4EC]">
            <Tab
              _selected={{ bg: "#5DC2D8", color: "white" }}
              className="flex-1 py-2 text-lg font-bold text-center rounded-t-md text-[#707070]"
            >
              REGISTRO
            </Tab>
            <Tab
              _selected={{ bg: "#5DC2D8", color: "white" }}
              className="flex-1 py-2 text-lg font-bold text-center rounded-t-md text-[#707070]"
            >
              EXPLORA PROGRAMAS
            </Tab>
            <Tab
              _selected={{ bg: "#5DC2D8", color: "white" }}
              className="flex-1 py-2 text-lg font-bold text-center rounded-t-md text-[#707070]"
            >
              GESTIÓN SIMPLIFICADA
            </Tab>
            <Tab
              _selected={{ bg: "#5DC2D8", color: "white" }}
              className="flex-1 py-2 text-lg font-bold text-center rounded-t-md text-[#707070]"
            >
              REPORTES
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="p-6 flex items-center gap-4 justify-between">
                <div className="w-full">
                  <h2 className="text-xl font-bold">Registro</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Crea tu cuenta de manera rápida y sencilla.
                  </p>
                </div>
                <img
                  src="/path-to-your-image.png"
                  alt="Explora Programas"
                  className="w-full max-w-xl mx-auto border rounded-md"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-6 flex items-center gap-4 justify-between">
                <div className="w-full">
                  <h2 className="text-xl font-bold">Explora Programas</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Busca y encuentra programas sociales fácilmente, con toda la
                    información al alcance de tu mano.
                  </p>
                </div>
                <img
                  src="/path-to-your-image.png"
                  alt="Explora Programas"
                  className="w-full max-w-xl mx-auto border rounded-md"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-6 flex items-center gap-4 justify-between">
                <div className="w-full">
                  <h2 className="text-xl font-bold">Gestión Simplificada</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Administra y supervisa los programas sociales con
                    herramientas intuitivas que simplifican la gestión.
                  </p>
                </div>
                <img
                  src="/path-to-your-image.png"
                  alt="Explora Programas"
                  className="w-full max-w-xl mx-auto border rounded-md"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-6 flex items-center gap-4 justify-between">
                <div className="w-full">
                  <h2 className="text-xl font-bold">Reportes</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Genera reportes detallados y estadísticas precisas para un
                    análisis profundo y una mejor toma de decisiones.
                  </p>
                </div>
                <img
                  src="/path-to-your-image.png"
                  alt="Explora Programas"
                  className="w-full max-w-xl mx-auto border rounded-md"
                />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;
