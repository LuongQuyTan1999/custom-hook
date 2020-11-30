import React, { useState } from "react";

const useForm = (initialState = {}, onSubmit: Function) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};

export default useForm;
