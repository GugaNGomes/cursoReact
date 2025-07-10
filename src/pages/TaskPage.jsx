import { ChevronLeftIcon } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Title from "../components/Title.jsx";
import Butoon from "../components/button.jsx";

function TaskPage() {
  const { title, description } = useParams();
  const navigate = useNavigate();

  return (
    <h1 className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="W-[500px] space-y-4">
        <div className="flex; justify-center relative">
          <Butoon
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 p-2 bg-slate-400 rounded-md text-white"
          >
            <ChevronLeftIcon></ChevronLeftIcon>
          </Butoon>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md ">
          <h2 className="text-xl text-slate-00 text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </h1>
  );
}

export default TaskPage;
