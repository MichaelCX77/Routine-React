
export default class Tarefas {

    #id: string
    #title: string
    #descricao: string
    #data: string
    #horario: string
    #nao_repetir: boolean
    #repetir_a_cada_dia: number
    #repetir_a_cada_ate: string
    #color: string

    constructor(title, descricao, data, horario, nao_repetir,repetir_a_cada_dia,
        repetir_a_cada_ate, color, id = null){

        this.#title = title
        this.#descricao = descricao
        this.#data = data
        this.#horario = horario
        this.#nao_repetir = nao_repetir
        this.#repetir_a_cada_dia = repetir_a_cada_dia
        this.#repetir_a_cada_ate = repetir_a_cada_ate
        this.#color = color
        this.#id = id

    }

    static vazio(){
        return new Tarefas('','','','',false,0,'','')
    }

    static basicHour(hour){
        return new Tarefas('','','',hour,false,0,'','')
    }

    get id() {
        return this.#id
    }
    
    get title() {
        return this.#title
    }

    get descricao() {
        return this.#descricao
    }
    
    get data() {
        return this.#data
    }

    get horario() {
        return this.#horario
    }

    get nao_repetir() {
        return this.#nao_repetir
    }

    get repetir_a_cada_dia() {
        return this.#repetir_a_cada_dia
    }

    get repetir_a_cada_ate() {
        return this.#repetir_a_cada_ate
    }

    get color() {
        return this.#color
    }

    set data(data) {
        this.#data = data
    }

    set id(id) {
        this.#id = id
    }

}