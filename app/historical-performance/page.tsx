'use client';

import Map from '@/components/SuissCharts/Map';
import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissBarTopChart from '@/components/SuissCharts/SuissBarTopChart';
import { tailwindConfig } from '@/components/utils/utils';

const chartData = {
  labels: ['Norte', 'Central', 'Sur', 'Este', 'Oeste'],
  datasets: [
    // Blue bars
    {
      label: '2023',
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors['app-red'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-red'][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  showLabels: false,
};

const chartData2 = {
  labels: ['Norte', 'Central', 'Sur', 'Este', 'Oeste'],
  datasets: [
    // Blue bars
    {
      label: 'Presupuesto Asignado',
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors['app-blue'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-blue'][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: 'Presupuesto Ejecutado',
      data: [1600, 700, 1000, 400, 1300],
      backgroundColor: tailwindConfig.theme.colors['app-light-blue'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-light-blue'][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  showLabels: true,
  labelStyle: 'font-semibold text-base',
};

const barTopchartData = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Proyectos Presupuestados',
      data: [5000, 4000, 4000, 3800, 5200, 5100],
      backgroundColor: tailwindConfig.theme.colors['app-light-blue'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-light-blue'][900],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    {
      label: 'Proyectos Ejecutados',
      data: [4800, 4200, 4800, 1800, 3300, 3500],
      backgroundColor: tailwindConfig.theme.colors['app-light-blue'][500],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-light-blue'][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
};

export default function HistoricalPerformance() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
        <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Desempeño Histórico de Programas
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        <div>
          <SuissBarChart title='Evolución en Cobertura' chartData={chartData} />
        </div>
        <div>
          <SuissBarChart
            title='Presupuesto y Ejecución a lo Largo de los Años (en millones)'
            chartData={chartData2}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <SuissBarTopChart
            title='Presupuestado y Ejecutado en Físico'
            data={barTopchartData}
          />
        </div>
        <div className='w-full bg-white dark:bg-slate-800 rounded-3xl'>
          <Map title='Mapa de Desempeño Histórico de Programas' bubbleMap />
        </div>
      </div>
    </div>
  );
}
