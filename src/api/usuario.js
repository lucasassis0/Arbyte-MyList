import axios from 'axios'

export function cadastrar(nome, email) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users',
        {
            fullName: nome,
            email: email,
        }
    )
}

export function login(email) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login',
        {
            email: email
        }
    )
}

export function registraTarefa(tarefa, token) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/tasks',
    {
        description: tarefa,
        completed: false,
    },
    {
        headers: {'Authorization': `Bearer ${token}`}
    }
    )
}

export function deletaTarefa (id, token) {
    return axios.delete(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,{
        headers: {'Authorization': `Bearer ${token}`}
    })
}