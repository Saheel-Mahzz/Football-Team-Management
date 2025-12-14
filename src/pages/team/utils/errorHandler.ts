import { PLAYER_ERRORS } from "@/constants/errors";
import { PlayerErrorCode } from "@/types/players";
export const getErrorMessage = (errorCode: PlayerErrorCode): string => {
  return PLAYER_ERRORS[errorCode];
};