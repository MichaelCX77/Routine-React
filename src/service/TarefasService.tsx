import Tarefas from "../entity/tarefas";

export function getListTasks(){
    
    return [
        new Tarefas('Caminhada','Fazer Caminhada','28/02/2022','18:00',true, 2,'30/06/2022', null,1),
        new Tarefas('Academia','Fazer Academia','22/02/2022','15:00',true, 2,'15/05/2022', null,2),
        new Tarefas('Natação','Fazer Natação','22/02/2022','16:00',true, 2,'05/08/2022', null,3),
        new Tarefas('Boxe','Fazer Aula de Boxe','22/02/2022','08:00',true, 2,'02/06/2022', null,4),
        new Tarefas('Pilates','Fazer Pilates','22/02/2022','10:00',true, 2,'12/09/2022', null,5)
    ]
}

export function editTask(task : Tarefas){

    console.log("Tarefa a ser editada " + task.title)

}

export function deleteTask(task : Tarefas){

    console.log("Tarefa deletada " + task.title)

}

export function createTask(task : Tarefas){

    console.log("Tarefa criada" + task.title)

}

export function getTask(){



    
    return new Tarefas('Pilates','Fazer Pilates','22/02/2022',"40",true, 10,'12/09/2022', "green",5)

}