import { use } from "react";
import React, { useState } from "react";
import Input from "./input.jsx";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col gap-2">
      <Input
        id="id_title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite o título da tarefa"
      ></Input>
      <Input
        id="description"
        type="text"
        value={description}
        placeholder="Digite a desrição da tarefa"
        onChange={(e) => setDescription(e.target.value)}
      ></Input>

      <button
        className="bg-slate-500 text-white px4 rounded-md font-medium"
        onClick={() => {
          onAddTaskClick({
            title: title,
            description: description,
          });
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
