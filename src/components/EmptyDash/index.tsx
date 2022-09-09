import React from "react";
import { CircleWavyQuestion } from "phosphor-react";
import { EmptyContainer } from "./styles";

export function EmptyDash () {
  return (
    <EmptyContainer>
      <CircleWavyQuestion color="#4444" size={100} weight="thin" />
      <span>Nenhum dado encontrado</span>
    </EmptyContainer>
  )
}