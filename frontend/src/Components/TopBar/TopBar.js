import "./TopBar.css"
import api from "../../api/api"

let newTask = ""
let priority = "Baixa"
let dueDate = ""

function TopBar(props) {

    const refresh = props?.refresh

    const addNewTask = () => {

        if(newTask?.length > 50){
            alert('Escreva uma tarefa menor')
            newTask=""
            return
        }

        if(!newTask || !priority || !dueDate){

            newTask=""
            priority=""
            dueDate=""

            console.log('Todos os valores devem ser preenchidos')
            return
        }

        api.addTaskApi(newTask, priority, dueDate).then((res) => {

            if(!res) console.log("Erro ao adicionar a tarefa");
            refresh(false)
            console.log('Tarefa adicionada com sucesso.')

        }).catch((err) => {
            console.log("Erro ao adicionar a tarefa",err)
            refresh(false)
        })

    }

    const changeTask = (evt) => { newTask = evt?.target?.value }
    const changePriority = (evt) => { priority = evt?.target?.value }
    const changeDueDate = (evt) => { dueDate = evt?.target?.value }

    return (
        <div className="baseBar">
            <input onChange={changeTask} className="newtask" placeholder="Nova tarefa" />
            <select className="priority" placeholder="Prioridade">
                <option onClick={changePriority}>Baixa</option>
                <option onClick={changePriority}>Média</option>
                <option onClick={changePriority}>Alta</option>
            </select>
            <input type="date" onChange={changeDueDate} className="duedate" />
            <button onClick={addNewTask}>Adicionar</button>
        </div>
    );
}

export default TopBar;
