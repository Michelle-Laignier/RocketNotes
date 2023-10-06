// axios é uma lib pra trabalhar com requisições http
import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3333" // parte do endereço do back que sempre se repete
})