import Tarefas from "../entity/tarefas";

export function getListTasks(){
    
    return [
        new Tarefas('Caminhada','Fazer Caminhada','28/02/2022','18:00',true, 2,'30/06/2022', null,1),
        new Tarefas('Academia','Fazer Academia','29/02/2022','15:00',true, 2,'15/05/2022', null,2),
        new Tarefas('Natação','Fazer Natação','21/02/2022','16:00',true, 2,'05/08/2022', null,3),
        new Tarefas('Boxe','Fazer Aula de Boxe','23/02/2022','08:00',true, 2,'02/06/2022', null,4),
        new Tarefas('Pilates','Fazer Pilates','21/02/2022','10:00',true, 2,'12/09/2022', null,5)
    ]
}

export function getTask(id){

    return new Tarefas('Caminhada','Fazer Caminhada','28/02/2022','18:00',true, 2,'30/06/2022', null,id)

}