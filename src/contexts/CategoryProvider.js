import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [specificCourses, setSpecificCourses] = useState([]);
  const [category, setCategory] = useState("all");
  const categoryHandler = (name) => {
    setCategory(name);
  };

  useEffect(() => {
    fetch(
      `https://smart-learning-360.vercel.app/courses/${category.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSpecificCourses(data);
      });
  }, [category]);

  return (
    <CategoryContext.Provider value={{ categoryHandler, specificCourses }}>
      {children}
    </CategoryContext.Provider>
  );
};
