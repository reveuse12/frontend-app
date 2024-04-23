import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";

export const getApi = async (url: string, data: any) => {
  try {
    const response = await axios.get(url, data);
    return response.data;
  } catch (error) {
    toast.error("Err getting");
  }
};

export const postApi = async (url: string, data: any) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    toast.error("Err posting");
  }
};

export const putApi = async (url: string, data: any) => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    toast.error("Err putting");
  }
};

export const deleteApi = async (url: string, data: any) => {
  try {
    const response = await axios.delete(url, data);
    return response.data;
  } catch (error) {
    toast.error("Err deleting");
  }
};
