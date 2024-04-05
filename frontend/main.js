import "./src/index.css";
import axios from "axios";

const response = await axios.get(
  `${
    import.meta.env.VITE_COINMARKETCAP_BASE_URL
  } /v1/cryptocurrency/categories`,
  {
      headers: {
        "X-CMC_PRO_API_KEY": import.meta.env.VITE_COINMARKETCAP_API_KEY,
      },
  }
);

console.log(response);