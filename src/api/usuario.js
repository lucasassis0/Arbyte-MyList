import axios from 'axios'

export function cadastrar(nome, email) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users',
        {
            fullName: nome,
            email: email,
        }
    )
        .catch(erro => {
            console.log("erro: ", erro.response.data);
        })
}