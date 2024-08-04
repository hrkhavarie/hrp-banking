'use client'
import {Chart   as ChartJS , ArcElement ,Tooltip , Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartProps } from './DoughnutChart.types';
import { Flag } from 'lucide-react';

ChartJS.register(ArcElement , Tooltip , Legend);
const DoughnutChart = ({accounts}:DoughnutChartProps) => {

  const data = {
    datasets:[
      {
        label: 'Bank' , 
        data: [1250 , 3400 , 5040],
        backgroundColor: ['#0179FE' , '#2265d8' , '#85B7FF'],

      }
    ],
    labels: ['Account 1' , 'Account 2' , 'Account 3'],
  }
  return (
    
<Doughnut 
  data={data}
  options={{
      cutout:'60%' , 
      plugins:{
        legend:{
          display:false
        }
      }
    }}
  />

  )
}
export default DoughnutChart