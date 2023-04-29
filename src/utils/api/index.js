import { useState,useEffect } from "react";
import axios from "axios";
export const api = axios.create({
    baseURL: "https://api.coincap.io/v2/"
})
export default api;
