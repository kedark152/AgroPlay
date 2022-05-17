import axios from "axios";
import { useState, useEffect } from "react";

export const GetCategories = () => {
  const [loader, setLoader] = useState(true);
  const [categories, setCategories] = useState([{}]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/categories");
        const getCategories = response.data.categories;
        setLoader(false);
        setCategories(getCategories);
      } catch (error) {
        console.log("Error from getCategories.js ", error);
      }
    })(); //IIFE - Immediately Invoked Function
  }, []);

  return { loader, categories };
};
