import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

import { app, firestore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { ChartData, Timer } from "../../@types/timer";
import { EmptyDash } from "../EmptyDash";

export function Echart () {
  const [timers, setTimers] = useState<ChartData | null>(null);
  const [labelToFilter, setLabelToFilter] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const dbInstance = collection(firestore, "timer");
    getDocs(dbInstance).then((response) => {
      // @ts-ignore
      const timersResponse: Timer[] = response.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id
        }
      });
      const timersByUser = {};
      timersResponse.forEach(timer => {
        if (Object.keys(timersByUser).includes(timer.projectName)) {
          // @ts-ignore
          timersByUser[timer.projectName] += timer.time;
        } else {
          // @ts-ignore
          timersByUser[timer.projectName] = timer.time;
        }
      });

      setTimers(() => {
        const labels = Object.keys(timersByUser);
        const datasets: number[] = Object.values(timersByUser);

        return {
          labels,
          datasets
        }
      });

    }).catch((err) => {
      console.log(err);
    });
  }, []);
  
  const backgroundColors = timers?.datasets.map(day => {
    if ((day > 0) && (day <= 40)) 
      return "#31b";
    else if ((day > 40) && (day <= 100))
      return "#F03dae";
    else if (day > 100)
      return "#FAD321";
    else
      return "red";
  });

  if (!timers) {
    return <EmptyDash />
  }

  return (
      <Bar 
        data={{
          labels: timers?.labels,
          datasets: [{
            label: "Time in seconds",
            data: timers?.datasets,
            backgroundColor: backgroundColors
          }]
        }}
        options={{
          onClick(e, item) {
            if (item.length !== 0) {
              const label = timers.labels[item[0].index];
              setLabelToFilter(label);
              console.log(label)
            }
          },
          onHover(ev, elements) {
            
          }
        }}
      />
  );
}
