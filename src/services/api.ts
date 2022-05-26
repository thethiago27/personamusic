import axios from 'axios';
import {getUserCookie} from "./user";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${getUserCookie}`,
  }
});
