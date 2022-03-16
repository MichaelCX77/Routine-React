
export default class Periodos {

    #id

    #periodo

    #ord

    constructor(periodo, id = null, ord){

        this.#id = id
        this.#periodo = periodo
        this.#ord = ord
    }

    get id(){
        return this.#id
    }

    get periodo(){
        return this.#periodo
    }

    get ord(){
        return this.#ord
    }
}