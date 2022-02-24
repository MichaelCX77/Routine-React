import Tarefas from "../../core/Tarefas";
import TarefasRepository from "../../core/TarefasRepository"
import firebase from "../data/connection"

export default class TarefasColecao implements TarefasRepository{

    conversor = {

        toFirestore(task : Tarefas){
            return {
                title: task.title,
                descricao: task.descricao,
                data: task.data,
                horario: task.horario,
                nao_repetir: task.nao_repetir,
                repetir_a_cada_dia: task.repetir_a_cada_dia,
                repetir_a_cada_ate: task.repetir_a_cada_ate,
                color: task.color
            }
        }, fromFirestore(snapshot : firebase.firestore.QueryDocumentSnapshot, options : firebase.firestore.SnapshotOptions) : Tarefas {
                const dados = snapshot?.data(options)
                return new Tarefas(dados.title, dados.descricao,
                                   dados.data, dados.horario, 
                                   dados.nao_repetir, dados.repetir_a_cada_dia,
                                   dados.repetir_a_cada_ate, dados.color,
                                   snapshot.id)
        }
    }

    colecao(){
        return firebase.firestore()
                        .collection('tarefas')
                        .withConverter(this.conversor)
    }

    async salvar(task : Tarefas): Promise<Tarefas>{

        if(task.id == null){
            await this.colecao().doc(task.id).set(task)
            return task
        } else {
            const docRef = await this.colecao().add(task)
            const doc = await docRef.get()
            return doc.data()
        }

    }
    async excluir(task : Tarefas): Promise<void>{
        return this.colecao().doc(task.id).delete()
    }

    async obterTarefas(): Promise<Tarefas[]>{
        const query =  await this.colecao().get()
        return query.docs.map(doc => doc.data())
    }

}