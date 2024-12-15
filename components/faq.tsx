"use client";

import React from "react";
import { Wrapper } from "./wrapper";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const CustomAccordion = () => {
  return (
    <Box className="bg-[#52CCDE] p-8">
      <Wrapper>
        <h2 className="text-3xl font-extrabold font-pluto-bold text-white text-center my-10">
          ¿Tienes alguna pregunta?
        </h2>
        <div className="grid gap-4">
          <Accordion allowToggle>
            <AccordionItem border="none">
              {({ isExpanded }: { isExpanded: boolean }) => (
                <div
                  className={`border rounded-2xl bg-white px-4 py-7 ${
                    isExpanded ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <AccordionButton className="hover:bg-white">
                    <Box flex="1" textAlign="left" className="font-bold">
                      ¿Qué es SUISS y cómo puede ayudarme?
                    </Box>
                    <Box
                      className={`rounded-full p-1 w-8 h-8 grid place-content-center text-xl ${
                        isExpanded
                          ? "bg-red-500 text-white"
                          : "bg-white text-red-500 shadow-md"
                      } transition-all duration-300`}
                    >
                      <FiChevronDown
                        className={`transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </Box>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    SUISS es una plataforma que centraliza información de
                    programas sociales, facilitando a las entidades
                    gubernamentales y otras instituciones la gestión eficiente
                    de estos programas. A través de nuestra plataforma, puedes
                    acceder a datos integrados de múltiples sistemas, visualizar
                    estadísticas mediante gráficos y dashboards, y generar
                    reportes detallados para una mejor toma de decisiones.
                  </AccordionPanel>
                </div>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <AccordionItem border="none">
              {({ isExpanded }: { isExpanded: boolean }) => (
                <div
                  className={`border rounded-2xl bg-white px-4 py-7 ${
                    isExpanded ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <AccordionButton className="hover:bg-white">
                    <Box flex="1" textAlign="left" className="font-bold">
                      ¿Qué es SUISS y cómo puede ayudarme?
                    </Box>
                    <Box
                      className={`rounded-full p-1 w-8 h-8 grid place-content-center text-xl ${
                        isExpanded
                          ? "bg-red-500 text-white"
                          : "bg-white text-red-500 shadow-md"
                      } transition-all duration-300`}
                    >
                      <FiChevronDown
                        className={`transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </Box>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    SUISS es una plataforma que centraliza información de
                    programas sociales, facilitando a las entidades
                    gubernamentales y otras instituciones la gestión eficiente
                    de estos programas. A través de nuestra plataforma, puedes
                    acceder a datos integrados de múltiples sistemas, visualizar
                    estadísticas mediante gráficos y dashboards, y generar
                    reportes detallados para una mejor toma de decisiones.
                  </AccordionPanel>
                </div>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <AccordionItem border="none">
              {({ isExpanded }: { isExpanded: boolean }) => (
                <div
                  className={`border rounded-2xl bg-white px-4 py-7 ${
                    isExpanded ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <AccordionButton className="hover:bg-white">
                    <Box flex="1" textAlign="left" className="font-bold">
                      ¿Qué es SUISS y cómo puede ayudarme?
                    </Box>
                    <Box
                      className={`rounded-full p-1 w-8 h-8 grid place-content-center text-xl ${
                        isExpanded
                          ? "bg-red-500 text-white"
                          : "bg-white text-red-500 shadow-md"
                      } transition-all duration-300`}
                    >
                      <FiChevronDown
                        className={`transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </Box>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    SUISS es una plataforma que centraliza información de
                    programas sociales, facilitando a las entidades
                    gubernamentales y otras instituciones la gestión eficiente
                    de estos programas. A través de nuestra plataforma, puedes
                    acceder a datos integrados de múltiples sistemas, visualizar
                    estadísticas mediante gráficos y dashboards, y generar
                    reportes detallados para una mejor toma de decisiones.
                  </AccordionPanel>
                </div>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <AccordionItem border="none">
              {({ isExpanded }: { isExpanded: boolean }) => (
                <div
                  className={`border rounded-2xl bg-white px-4 py-7 ${
                    isExpanded ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <AccordionButton className="hover:bg-white">
                    <Box flex="1" textAlign="left" className="font-bold">
                      ¿Qué es SUISS y cómo puede ayudarme?
                    </Box>
                    <Box
                      className={`rounded-full p-1 w-8 h-8 grid place-content-center text-xl ${
                        isExpanded
                          ? "bg-red-500 text-white"
                          : "bg-white text-red-500 shadow-md"
                      } transition-all duration-300`}
                    >
                      <FiChevronDown
                        className={`transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </Box>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    SUISS es una plataforma que centraliza información de
                    programas sociales, facilitando a las entidades
                    gubernamentales y otras instituciones la gestión eficiente
                    de estos programas. A través de nuestra plataforma, puedes
                    acceder a datos integrados de múltiples sistemas, visualizar
                    estadísticas mediante gráficos y dashboards, y generar
                    reportes detallados para una mejor toma de decisiones.
                  </AccordionPanel>
                </div>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      </Wrapper>
    </Box>
  );
};

export default CustomAccordion;
