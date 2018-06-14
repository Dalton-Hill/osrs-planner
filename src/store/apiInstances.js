import axios from 'axios';


export const inventoryAPI = axios.create({
  baseURL: "https://8y35tqer0g.execute-api.us-east-1.amazonaws.com/dev/inventory"
});