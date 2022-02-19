import React from "react";
import Input from "./inputs/Input"
import TextArea from "./inputs/TextArea"
import Select from "./inputs/Select";
import Button from "./buttons/Button";
import CheckPerson from "./inputs/CheckPerson";

export default function Formulario(props){

    function generateOptions(){
        let arrayhorario = []

        for (let horas = 0; horas < 24; horas++) {
            let horaAtual = (horas.toString().length == 1) ? "0"+horas+":" : horas+":" 

            for (let min = 0; min < 60; min+=15) {
                let horaFinal = horaAtual+ (min.toString().length == 1 ? "0"+min : min)
                arrayhorario.push(horaFinal)
            }
        }
        return arrayhorario;
    }

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
                <Select arrayOptions={generateOptions()} />
            </div> 
        )
    }

    function renderSelectHour(){
        return(
            <div className="flex items-baseline">
                <CheckPerson color="black"/>
                <label className="pl-3" htmlFor="check_naorepetir">Não Repetir</label>
            </div>
        )
    }

    function renderFrequency(){
        return(
            <div className="flex items-baseline">
                <span className="pl-3 mt-3 text-2x1">Repetir a cada</span>
                <Select arrayOptions={arraydays} />
                <span className="pt-3">até</span>
                <Input type="date" width="w-3/4"/>
            </div>
        )
    }

    function renderSelectColor(){
        return(
            <div className="flex items-baseline">
                <CheckPerson color="#fd4141" classe="px-12 py-3"/>
                <CheckPerson color="#5555fb" classe="px-12 py-3"/>
                <CheckPerson color="#ffb122" classe="px-12 py-3"/>
                <CheckPerson color="#25bb25" classe="px-12 py-3"/>
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