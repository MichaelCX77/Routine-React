import Tarefas from "./Tarefas";

export default interface TarefasRepository{
    salvar(tarefa : Tarefas): Promise<Tarefas>
    excluir(tarefa : Tarefas): Promise<void>
    obterTarefas(): Promise<Tarefas[]>
    obterTarefasByDay(day: string): Promise<Tarefas>
}