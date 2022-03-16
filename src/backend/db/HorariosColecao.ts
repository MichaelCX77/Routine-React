import HorariosRepository from '../../core/HorariosRepository'
import Horarios from '../../core/Horarios'
import firebase from 'firebase'

export default class HorariosColecao implements HorariosRepository {

    #conversor = {

        toFirestore(horarios : Horarios){
            return {
                horario: horarios.horario,
            }
        }, fromFirestore(snapshot : firebase.firestore.QueryDocumentSnapshot, options : firebase.firestore.SnapshotOptions) : Horarios {
                const dados = snapshot?.data(options)
                return new Horarios(dados.horario,
                                   snapshot.id)
        }
    }

    async obterHorarios(): Promise<Horarios[]>{
        const query =  await this.colecao().get()
        return query.docs.map(doc => doc.data())
    }

    private colecao(){  
        return firebase.firestore()
                        .collection('hours')
                        .orderBy('horario')
                        .withConverter(this.#conversor);
    }

}