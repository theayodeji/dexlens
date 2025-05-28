const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTokens = async (page, perPage) => {
    
  try {
    const response = await fetch(`${API_BASE_URL}/tokens/all?page=${page}&per_page=${perPage}`);
    console.log(API_BASE_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch tokens');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tokens:', error);
    throw error;
  }
};

export const searchTokens = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tokens/search/${query}`);
    if (!response.ok) {
      throw new Error('Failed to search tokens');
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error searching tokens:', error);
    throw error;
  }
};

export const fetchTokenById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tokens/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch token by ID');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching token by ID:', error);
    throw error;
  }
};

