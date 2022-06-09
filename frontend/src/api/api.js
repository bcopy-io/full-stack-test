import axios from "axios"
import environments from "../config/environments"

const baseURL = environments.default.backendUrl

class Api {
    constructor() {
        if (!baseURL) {
            console.log("URL de acesso vazia. Verifique o arquivo environments.js.")
            return
        }
        this.api = axios.create({ baseURL })
    }

    async getTasksApi() {

        const response = await this.api.get("tasks")

        if (response.status != 200) return []

        return response?.data?.data
    }

    async addTaskApi(newtask, priority, duedate) {

        const response = await this.api.post('task', { newtask, priority, duedate })

        if (response?.status != 200) return false;

        return true

    }

    async deleteTaskApi(id) {

        if (!id) {
            console.log('O id da tarefa não foi enviado pelo botão.')
            return false
        }

        const response = await this.api.delete("task/" + id)

        if (response.status != 200) return false

        return true
    }

    async editTaskApi(id, value) {

        if (!id || !value) return false;

        const checkKeys = Object.keys(value)

        if (!checkKeys.includes('task') && !checkKeys.includes('priority')
            && !checkKeys.includes('duedate')) {
            console.log("Os novos valores devem ser enviados em um objeto {task:val}, {priority:val} ou {duedate:val}")
            return false
        };

        const val = { val: value }

        try {
            const response = await this.api.put("task/" + id,
                val, { 'Content-Type': 'application/json' })

            if (response?.status != 200) return false

            return true

        } catch (err) {
            console.log(err)
            return false
        }

    }

}

export default new Api()