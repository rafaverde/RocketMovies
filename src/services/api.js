import axios from "axios"

export const api = axios.create({
  baseURL: "https://moviesapi-q5tj.onrender.com/",
})
