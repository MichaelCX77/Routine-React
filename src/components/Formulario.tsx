import React from "react";
import Input from "./inputs/Input"
import TextArea from "./inputs/TextArea"
import Select from "./inputs/Select";
import Button from "./buttons/Button";
import CheckPerson from "./inputs/CheckPerson";
import { generateHours } from "../uteis/timeUtil"

export default function Formulario(props){

    const [id, setId] = React.useState()
    const [title, setTitle] = React.useState()
    const [descricao, setDescricao] = React.useState()
    const [data, setData] = React.useState()
    const [horario, setHorario] = React.useState()
    const [naoRepetir, setNaoRepetir] = React.useState(false)
    const [repetirACD, setrepetirACD] = React.useState()
    const [repetirATE, setrepetirATE] = React.useState()
    const [color, setColor]= React.useState("")

    const arraydays = ["1 dia","2 dias", "3 dias","4 dias","5 dias",
                        "6 dias","7 dias","10 dias","15 dias","20 dias","1 mês"]

    function renderInputTitulo(){
        return(
            <div className="flex">
                <Input placeholder="Título" type="text"/>
            </div>
        )
    }

    function renderTextArea(){
        return(
            <div className="flex">
                <TextArea placeholder="Descrição" cols="55" rows="4"/>
            </div> 
        )
    }

    function renderInputDate(){
        return(
            <div className="flex">
                <Input type="date" width="w-3/4"/>
                <Select arrayOptions={generateHours()} />
            </div> 
        )
    }

    function renderSelectHour(){

        return(
            <div className="flex items-baseline">
                <CheckPerson color="black" onClick={(e) => setNaoRepetir(e)}/>
                <label className="pl-3" htmlFor="check_naorepetir">Não Repetir</label>
            </div>
        )
    }

    function renderFrequency(){

        const isEnabled = naoRepetir == true ? "disabled" : ""

        return(
            <div className="flex items-baseline">
                <span className="pl-3 mt-3 text-2x1">Repetir a cada</span>
                <Select arrayOptions={arraydays} isEnabled={isEnabled}/>
                <span className="pt-3">até</span>
                <Input type="date" width="w-3/4" isEnabled={isEnabled}/>
            </div>
        )
    }

    function renderSelectColor(){

        const isCheked = componentColor => (color == componentColor) ? true : false

        return(
            <div className="flex items-baseline">
                <CheckPerson isCheked={isCheked('red')} color="#fd4141"
                    classe="px-12 py-3" onClick={() => setColor('red')}/>
                <CheckPerson isCheked={isCheked('blue')} color="#5555fb" 
                    classe="px-12 py-3" onClick={() => setColor('blue')} />
                <CheckPerson isCheked={isCheked('orange')} color="#ffb122" 
                    classe="px-12 py-3" onClick={() => setColor('orange')}/>
                <CheckPerson isCheked={isCheked('green')} color="#25bb25" 
                    classe="px-12 py-3" onClick={() => setColor('green')}/>
            </div>
        )
    }

    function renderButtons(click){
        return(
            <div className="flex place-content-center mt-5">
                <Button text="Voltar" color="bg-gray-400" hover="hover:bg-gray-200" classe="mx-3" onClick={click}/>
                <Button text="Confirmar" class="mx-3" width="w-24" onClick={click}/>
            </div>
        )
    }

    return(
        <React.Fragment>
            <div className="container">
                {renderInputTitulo()}
                {renderTextArea()}
                {renderInputDate()}
                {renderSelectHour()}
                {renderFrequency()}
                {renderSelectColor()}
            </div>
            {renderButtons(props.setTableVisible)}
            <br />
        </React.Fragment>
    )
}