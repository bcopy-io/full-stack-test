import "./Base.css"
import Table from "../Table/Table"
import TopBar from "../TopBar/TopBar"
import api from "../../api/api"
import { useState } from "react"

function Base() {

  const [dados, setDados] = useState(false)

    !dados && api.getTasksApi().then((list) => {
      setDados(list)

    }).catch((err) => {
      console.log("Erro ao recuperar as tarefas ",err)
    })
  
  return (
    <div className="base">
      <TopBar refresh={setDados} api={api} />
      {dados ? <Table dados={dados} api={api} refresh={setDados} /> : <></>}
    </div>
  );
}

export default Base;
