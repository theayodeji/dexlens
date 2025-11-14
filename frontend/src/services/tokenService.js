import { api } from "../lib/api";

export const fetchTokens = async (page, perPage) => {
  const response = await api.get(
    `/tokens/all?page=${page}&per_page=${perPage}`
  );
  return response.data;
};

export const searchTokens = async (query) => {
  const response = await api.get(`/tokens/search/${query}`);
  return response.data;
};

export const fetchTokenById = async (id) => {
  const response = await api.get(`/tokens/${id}`);
  return response.data;
};
