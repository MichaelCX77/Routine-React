
export default class Horarios {

    #id: string;

    #horario: string;

    constructor(horario, id = null){

        this.#horario = horario
        this.#id = id
    }

    static vazio(){
        return new Horarios(null, null);
    }

    get id() {
        return this.#id
    }

    get horario() {
        return this.#horario
    }
}