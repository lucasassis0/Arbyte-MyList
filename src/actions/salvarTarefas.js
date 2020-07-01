
export default function salvarTarefas(tasks){
    return ({
        type:  'SALVAR_TAREFAS',
        tasks: tasks
    })
}
