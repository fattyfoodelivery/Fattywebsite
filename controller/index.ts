// api.ts
import type { Locale } from '@/i18n.config';
import { FormData } from '@/app/[lang]/components/ContactUs';

const baseURL = 'https://fatty-api.fattyfooddeli.com/api';

export const getFetchData = async (locale: Locale) => {
  try {
    const response = await fetch(`${baseURL}/editable_fields/${locale}`, { next: { revalidate: 0 } });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching dictionary:', error);
    // You can handle the error here, e.g., return a default dictionary
    return {};
  }
};

export const subscribeApi = async (data: { email: string }) => {
  try {
    const response = await fetch(`${baseURL}/subscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json(); // modify this based on your API response structure
  } catch (error) {
    throw error; // handle errors as needed
  }
};

export const sendMessageApi = async (data: FormData) => {
  try {
    const response = await fetch(`${baseURL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json(); // handle the response as needed
  } catch (error) {
    console.error('Error during subscription:', error);
    // handle errors as needed
  }
};
