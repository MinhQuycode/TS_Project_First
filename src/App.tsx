import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

export interface People {
  userList: {
    name: string;
    age: number;
    bio: string;
  }[];
}

export default function App() {
  const [listPeople, setListPeople] = useState<People["userList"]>([
    { name: "Quy Pham", age: 20, bio: "Developer" },
  ]);
  return (
    <div className="container">
      <Form people={listPeople} setListPeople={setListPeople} />
      <List user={listPeople} />
    </div>
  );
}
