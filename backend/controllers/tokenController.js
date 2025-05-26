// Controller to handle token-related logic

import axios from "axios";

// Get all tokens
export const getAllTokens = async (req, res) => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: false,
    },
  })
  console.log(response.data);
  res.status(200).json(response.data);
};

// Get a token by ID
export const getTokenById = async (req, res) => {
  const { id } = req.params;

  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd&ids=${id}`);
  res.status(200).json(response.data[0]); 
};

