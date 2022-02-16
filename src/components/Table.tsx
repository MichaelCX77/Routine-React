
export default function Table(props){

    function head(){
        return(
            <thead className="text-left text-cyan-800 bg-slate-100">
                <tr>
                    <th className="pl-2">Horário</th>
                    <th className="pl-2">Tarefa</th>
                    <th className="pl-2">Descrição</th>
                </tr>
            </thead>
        )
    }

    function body(){
        return (
            <tbody>
                <tr className="bg-cyan-600 text-white">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>
                <tr className="bg-cyan-100 text-gray-600">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>
                <tr className="bg-cyan-600 text-white">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>
                <tr className="bg-cyan-100 text-gray-600">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>                <tr className="bg-cyan-600 text-white">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>
                <tr className="bg-cyan-100 text-gray-600">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>                <tr className="bg-cyan-600 text-white">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>
                <tr className="bg-cyan-100 text-gray-600">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>                <tr className="bg-cyan-600 text-white">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>
                <tr className="bg-cyan-100 text-gray-600">
                    <td className="pl-2">09:00</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                    <td className="pl-2">Buscar Yohan na creche</td>
                </tr>
            </tbody>
        )

    }
    return (
        <table className="w-auto border-2 border-gray-200">{head()} {body()}</table>
    )

}