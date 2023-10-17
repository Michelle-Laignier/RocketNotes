// axios é uma lib pra trabalhar com requisições http
import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-qev3.onrender.com" // parte do endereço do back que sempre se repete
})