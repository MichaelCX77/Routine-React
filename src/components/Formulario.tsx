import React from "react";
import Input from "./inputs/Input"
import TextArea from "./inputs/TextArea"
import Select from "./inputs/Select";
import Button from "./buttons/Button";

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

    return(
        <React.Fragment>

            <div className="container">
                <div className="flex">
                    <Input placeholder="Título" type="text"/>
                </div>
                <div className="flex">
                    <TextArea placeholder="Descrição" cols="55" rows="4"/>
                </div>
                <div className="flex">
                    <Input type="date" width="w-3/4"/>
                    <Select arrayOptions={generateOptions()} />
                </div>
                <div className="flex items-baseline">
                    <Input id="check_naorepetir" type="checkbox" />
                    <label className="pl-3" htmlFor="check_naorepetir">Não Repetir</label>
                </div>
                <div className="flex items-baseline">
                    <span className="pl-3 mt-3 text-2x1">Repetir a cada</span>
                    <Select arrayOptions={arraydays} />
                    <span className="pt-3">até</span>
                    <Input type="date" width="w-3/4"/>
                </div>
                {/* <div className="flex items-baseline">
                    <Input type="checkbox" back="blue-600"/>
                    <Input type="checkbox" back="red-600"/>
                    <Input type="checkbox" back="yellow-600"/>
                    <Input type="checkbox" back="green-600"/>
                </div> */}
            </div>
            <div className="flex place-content-center mt-5">
                <Button text="Voltar" classe="bg-gray-400 hover:bg-gray-200 mx-3"/>
                <Button text="Confirmar" classe="bg-green-500 hover:bg-green-300 mx-3 w-24"/>
            </div>
        </React.Fragment>
    )
}