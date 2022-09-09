import React, { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../context/Dashboard";
import { ModalContainer } from "./styles";

import { Box, HStack, Text, useTheme } from "native-base";
import { Bar } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import { ChartData } from "../../@types/timer";
import { X } from "phosphor-react";

type ModalProps = {};

export function Modal ({}: ModalProps) {
  const { currentProject } = useContext(DashboardContext);

  const [timers, setTimers] = useState<ChartData | null>(null);

  const { colors } = useTheme();
  const { toggleModal } = useContext(DashboardContext);

  useEffect(() => {
    const dbInstance = collection(firestore, "timer");
    getDocs(dbInstance).then((response) => {
      // @ts-ignore
      var timersResponse: Timer[] = response.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id
        }
      });

      timersResponse = timersResponse.filter(timer => timer.projectName === currentProject);

      const timersByUser = {};
      timersResponse.forEach(timer => {
        if (Object.keys(timersByUser).includes(timer.userName)) {
          // @ts-ignore
          timersByUser[timer.userName] += timer.time;
        } else {
          // @ts-ignore
          timersByUser[timer.userName] = timer.time;
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
  }, [currentProject]);

  const backgroundColors = timers?.datasets.map(day => {
    if ((day > 0) && (day <= 40)) 
      return "#be123c";
    else if ((day > 40) && (day <= 100))
      return "#064e3b";
    else if (day > 100)
      return "#22c55e";
    else
      return "red";
  });

  return (
    <ModalContainer>
      <Box
        bgColor={"light.400"}
        borderRadius="sm"
        shadow="9"
        justifyContent={"flex-start"}
        p="4"
      >
        <HStack
          mb="10"
          w="full"
          justifyContent={"space-between"}
        >
          <Text
            fontSize={"xl"}
            fontWeight="bold"
            color={"gray.900"}
          >Projeto: {currentProject}</Text>
          <X size={24} color={colors.black} onClick={() => toggleModal()} />
        </HStack>
        <Bar
          data={{
            labels: timers?.labels,
            datasets: [{
              label: "Time in seconds",
              data: timers?.datasets,
              backgroundColor: backgroundColors
            }]
          }}
        >

        </Bar>
      </Box>
    </ModalContainer>

  );
}