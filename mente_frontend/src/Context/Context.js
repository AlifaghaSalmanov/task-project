import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const mainContext = createContext(null)
function Context({ children }) {
const [data, setData] = useState([]);

const getData = async () => {
  const res = await axios.get(" http://localhost:3000/trainings");
  setData(res.data);
};
useEffect(() => {
  getData();
}, []);



}
export default Context