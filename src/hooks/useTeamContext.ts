import { TeamContext, TeamContextType } from "@/context/TeamContext";
import { useContext } from "react";

export function useTeamContext(): TeamContextType {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeamContext must be used within TeamProvider');
  }
  return context;
}