import { Player } from "@/types/players";

export const getTeamStatusColor = (count: number) => {
  switch (true) {
    case count >= 22:
      return {
        bgColor: 'bg-red-50',
        borderColor: 'border-red-300',
        textColor: 'text-red-800',
      };
    case count >= 20:
      return {
        bgColor: 'bg-orange-50', 
        borderColor: 'border-orange-300',
        textColor: 'text-orange-800',
      };
    case count >= 15:
      return {
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-300',
        textColor: 'text-yellow-800',
      };
    case count >= 10:
      return {
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-300',
        textColor: 'text-blue-800',
      };
    default:
      return {
        bgColor: 'bg-green-50',
        borderColor: 'border-green-300',
        textColor: 'text-green-800',
      };
  }
};

export const getPositionCount = (players:Player[])=>{
  return {
    totalPlayers: players.length,
    goalKeeper: players.filter(p => p.position === 'GK').length,
    defender: players.filter(p => p.position === 'DEF').length,
    mid: players.filter(p => p.position === 'MID').length,
    forward: players.filter(p => p.position === 'FWD').length,
  };
}