import React, { ChangeEvent, FormEvent, useState } from "react";
import "../css/form.css";
import { People as Props } from "../App";

interface IProps {
  people: Props["userList"];
  setListPeople: React.Dispatch<React.SetStateAction<Props["userList"]>>;
}
interface User {
  name: string;
  age: string;
  bio: string;
}
const Form: React.FC<IProps> = ({ people, setListPeople }) => {
  const [inputData, setInputData] = useState<User>({
    name: "",
    age: "",
    bio: "",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setListPeople([
      ...people,
      {
        name: inputData.name,
        age: Number(inputData.age),
        bio: inputData.bio,
      },
    ]);
    setInputData({
      name: "",
      age: "",
      bio: "",
    });
  };
  return (
    <div className="form-container">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={handleOnChange}
          value={inputData.name}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="age"
          value={inputData.age}
          onChange={handleOnChange}
        />
        <textarea
          name="bio"
          id="bio"
          value={inputData.bio}
          placeholder="Bio Description"
          onChange={handleOnChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
