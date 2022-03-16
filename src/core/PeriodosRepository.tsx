import Periodos from './Periodos'

export default interface PeriodosRepository {
    obterPeriodos(): Promise<Periodos[]>
}