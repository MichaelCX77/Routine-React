import Horarios from "./Horarios";

export default interface HorariosRepository{
    obterHorarios(): Promise<Horarios[]>
}