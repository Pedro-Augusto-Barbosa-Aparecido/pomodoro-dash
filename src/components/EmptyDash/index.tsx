import { Placeholder, CircleWavyQuestion } from "phosphor-react";
import { EmptyContainer } from "./styles";

export function EmptyDash () {
  return (
    <EmptyContainer>
      <CircleWavyQuestion color="#CAAAAA" size={100} weight="thin" />
      <span>Nenhum dado encontrado</span>
    </EmptyContainer>
  )
}