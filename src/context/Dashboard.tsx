import React, { createContext, useState } from "react";

type DashboardContextType = {
  currentProject: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  changeCurrentProject: (project: string) => void;
}

type DashboardContextProviderProps = {
  children: React.ReactNode;
}

export const DashboardContext = createContext({} as DashboardContextType);

export function DashboardContextProvider ({ children }: DashboardContextProviderProps) {
  const [currentProject, setCurrentProject] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const changeCurrentProject = (project: string) => setCurrentProject(project);
  const toggleModal = () => setIsModalOpen(state => !state);
  
  return (
    <DashboardContext.Provider value={{
      currentProject,
      changeCurrentProject,
      isModalOpen,
      toggleModal
    }}>
      { children }
    </DashboardContext.Provider>
  );
}
