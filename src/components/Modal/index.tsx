import React, { useContext } from "react";
import { DashboardContext } from "../../context/Dashboard";
import { ModalContainer } from "./styles";

import { Box } from "native-base";

type ModalProps = {};

export function Modal ({}: ModalProps) {
  const { currentProject } = useContext(DashboardContext);

  return (
    <ModalContainer>
      <Box
        bgColor={"gray.700"}
      >
      {currentProject}
      </Box>
    </ModalContainer>

  );
}