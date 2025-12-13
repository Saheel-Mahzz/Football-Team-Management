import { PLAYER_ERRORS } from "@/constants/errors";

export const getErrorMessage = (errorCode: string, params?: any) => {
  const message = PLAYER_ERRORS[errorCode];
  return message.replace('{count}', params?.count).replace('{position}', params?.position);
};