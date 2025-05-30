import axios from 'axios';

const BASE_URL = 'https://squash-global-apis.onrender.com/api';
// const BASE_URL = 'http://localhost:8000/api';

export const contactUs = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/contactUs`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
export const contactUsMail = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/sendEmail`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
