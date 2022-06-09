import "./Table.css"
import { useState } from "react"
import api from "../../api/api"

function Table(props) {

    const [list, setList] = useState(props.dados)
    const refresh = props?.refresh

    const editTask = (evt) => {

        evt.stopPropagation()

        if (evt?.target?.value?.length > 50) {
            alert('Escreva uma tarefa menor')
            evt.target.value = "";
            return
        }

        const target = evt?.target, newList = [...list]

        if (evt?.key == "Escape") {
            delete newList?.[target?.accessKey]?.editTask
            setList(newList)
            return
        }

        if (evt?.key == "Enter") {

            if (!target?.value) {
                delete newList?.[target?.accessKey]?.editTask
                setList(newList)
                return
            }

            const id = target?.id
            delete newList?.[target?.accessKey]?.editTask

            api.editTaskApi(id, { 'task': target?.value }).then((res) => {

                if (!res) console.log('Houve um erro ao atualizar a tarefa.');
                refresh(false)

            }).catch((err) => {

                console.log('err', err)

            })

            return
        }

        newList[target?.accessKey].editTask = true
        setList(newList)

    }

    const editPriority = (evt) => {

        evt.stopPropagation()

        const target = evt?.target, newList = [...list]

        if (evt?.key == "Escape") {
            delete newList?.[target?.accessKey]?.editPriority
            setList(newList)
            return
        }

        if (target?.label == "Média" || target?.label == "Alta" || target?.label == "Baixa") {

            const id = target?.id
            delete newList?.[target?.accessKey]?.editPriority

            api.editTaskApi(id, { 'priority': target?.value }).then((res) => {

                if (!res) console.log('Houve um erro ao atualizar a prioridade da tarefa.')
                refresh(false)

            }).catch((err) => {

                console.log('err', err)

            })
            return
        }

        newList[target?.accessKey].editPriority = true
        setList(newList)

    }

    const editDue = (evt) => {

        evt.stopPropagation()

        const target = evt?.target, newList = [...list]

        if (evt?.key == "Escape") {
            delete newList?.[target?.accessKey]?.editDue
            setList(newList)
            return
        }

        if (evt?.key == "Enter") {
            const id = target?.id
            delete newList?.[target?.accessKey]?.due

            api.editTaskApi(id, { 'duedate': target?.value }).then((res) => {

                if (!res) console.log('Houve um erro ao atualizar a data de vencimento da tarefa.');
                refresh(false)

            }).catch((err) => {
                console.log('err', err)
            })

            return
        }

        newList[target?.accessKey].editDue = true
        setList(newList)

    }

    const deleteTask = (evt) => {

        evt.stopPropagation()

        const id = evt?.target?.id

        if (!id) {
            console.log('Erro ao receber o ID do botão de deletar a tarefa.')
            return
        }

        api.deleteTaskApi(id).then((res) => {

            refresh(false)

        }).catch((err) => {
            console.log(err)
            refresh(false)
        })

    }

    const reset = () => {
        refresh(false)
    }

    return (
        <div style={{ justifyContent: 'center' }}>
            <div onClick={reset} class="reset"></div>
            <table className='table'>
                <tr>
                    <th>Tarefa</th>
                    <th>Prioridade</th>
                    <th>Vencimento</th>
                </tr>
                {Array.isArray(list) && list.map((e, i) => {

                    const priorities = (
                        <select>
                            <option accessKey={i} id={e?._id} tp="priority" onSelect={editPriority} >Alta</option>
                            <option accessKey={i} id={e?._id} tp="priority" onSelect={editPriority} >Média</option>
                            <option accessKey={i} id={e?._id} tp="priority" onSelect={editPriority} >Baixa</option>
                        </select>)

                    const process = {
                        0: 'Baixa',
                        1: 'Média',
                        2: 'Alta'
                    }

                    return (
                        <tr key={e?._id} accessKey={i} className="cell" >
                            <td accessKey={i} id={e?._id} onClick={editTask}>{e?.editTask ? (<input accessKey={i} tp="task" id={e?._id} onKeyUp={editTask} />) : <div><button onClick={deleteTask} id={e?._id} className="delete"></button><a id={e?._id} accessKey={i} onClick={editTask}>{e.task}</a></div>}</td>
                            <td accessKey={i} id={e?._id} onClick={editPriority}>{e?.editPriority ? priorities : (process?.[e?.priority] || 'ERRO')}</td>
                            <td accessKey={i} id={e?._id} onClick={editDue}>{e?.editDue ? (<input accessKey={i} tp="duedate" id={e?._id} onKeyUp={editDue} type="date" />) : e.duedate}</td>
                        </tr>)
                })}
            </table>
        </div>
    );
}

export default Table;
