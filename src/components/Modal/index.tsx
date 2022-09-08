import { useContext } from "react";
import { DashboardContext } from "../../context/Dashboard";

type ModalProps = {};

export function Modal ({}: ModalProps) {
  const { currentProject } = useContext(DashboardContext);

  return (
    <div>{currentProject}</div>

  );
}