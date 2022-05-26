import axios from 'axios';
import {getUserCookie} from "./user";

export const api = axios.create({
  baseURL: 'http://localhost:8700',
  headers: {
    Authorization: `Bearer ${getUserCookie}`,
  }
});