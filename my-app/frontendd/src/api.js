// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export const fetchTransactions = (month) => axios.get(`${API_BASE_URL}/products/transactions`, { params: { month } });
export const fetchStatistics = (month) => axios.get(`${API_BASE_URL}/products/statistics`, { params: { month } });
export const fetchBarChartData = (month) => axios.get(`${API_BASE_URL}/products/barchart`, { params: { month } });
export const fetchPieChartData = (month) => axios.get(`${API_BASE_URL}/products/piechart`, { params: { month } });
export const fetchCombinedData = (month) => axios.get(`${API_BASE_URL}/products/combined`, { params: { month } });
 