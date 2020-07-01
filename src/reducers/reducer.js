const defaultValue = { userData: { user: {} }, tasks: [] }

export default function usuario(store = defaultValue, action) {
    switch (action.type) {
        case 'SALVAR_DADOS':
            return { ...store, userData: action.userData }
        case 'SALVAR_TAREFAS':
            return { ...store, ...store.userData, tasks: [...store.tasks, action.tasks] }
        default:
            return store
    }
}