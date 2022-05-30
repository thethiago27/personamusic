import jscookie from "js-cookie";

export const getUserCookie = jscookie.get("token");
export const checkWindow = typeof window !== 'undefined';
