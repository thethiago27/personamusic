export const storeToken = (token: string): void =>
  localStorage.setItem("SPT:TOKEN", token);

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const deleteToken = (): void => localStorage.removeItem("SPT:TOKEN");
