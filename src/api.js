import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://bio.torre.co/api/bios/johnbenjaminzeus`,
  headers: {

    "Access-Control-Allow-Origin": "*",
  }
})