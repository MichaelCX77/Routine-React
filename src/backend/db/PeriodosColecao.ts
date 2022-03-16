
import PeriodosRepository from '../../core/PeriodosRepository'
import Periodos from '../../core/Periodos'
import firebase from 'firebase'

export default class PeriodosColecao implements PeriodosRepository {

    #conversor = {

        toFirestore(periodos : Periodos){
            return {
                horario: periodos.periodo,
            }
        }, fromFirestore(snapshot : firebase.firestore.QueryDocumentSnapshot, options : firebase.firestore.SnapshotOptions) : Periodos {
                const dados = snapshot?.data(options)
                return new Periodos(dados.periodo,
                                   snapshot.id,
                                   dados.ord)
        }
    }

    async obterPeriodos(): Promise<Periodos[]> {
        const query =  await this.colecao().get()
        return query.docs.map(doc => doc.data())
    }

    private colecao(){  
        return firebase.firestore()
                        .collection('periods')
                        .orderBy('ord')
                        .withConverter(this.#conversor);
    }

}