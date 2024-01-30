// api.ts
import axios from 'axios';
import type { Locale } from '@/i18n.config'
import { FormData } from '@/app/[lang]/components/ContactUs';

const api = axios.create({
  baseURL: process.env.API_ENDPOINT, // adjust the base URL accordingly
  timeout: 5000, // set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getFetchData = async (locale: Locale) => {
  try {
    const response = await api.get(`/editable_fields/${locale}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching dictionary:', error);
    // You can handle the error here, e.g., return a default dictionary
    return {};
  }
}

export const subscribeApi = async (data: { email: string }) => {
  try {
    const response = await api.post('/subscription', data);
    return response.data; // modify this based on your API response structure
  } catch (error) {
    throw error; // handle errors as needed
  }
};

export const sendMessageApi = async (data:FormData) => {
  try {
    const response = await api.post('/contact', data);
    return response.data; // handle the response as needed
  } catch (error) {
    console.error('Error during subscription:', error);
    // handle errors as needed
  }
};



// Add more API functions as needed
