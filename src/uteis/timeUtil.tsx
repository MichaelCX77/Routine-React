
// export function generateHours(){

//         let arrayhorario = []

//         for (let horas = 0; horas < 24; horas++) {
//             let horaAtual = (horas.toString().length == 1) ? "0"+horas+":" : horas+":" 

//             for (let min = 0; min < 60; min+=15) {
//                 let horaFinal = horaAtual+ (min.toString().length == 1 ? "0"+min : min)
//                 arrayhorario.push(horaFinal)
//             }
//         }
//         return arrayhorario;
// }

export function getActualDate(){

    const getDate = () => new Date();
    const getDay = () => String(getDate().getDate()).padStart(2, '0');
    const getMonth = () => String(getDate().getMonth() + 1).padStart(2, '0');
    const getYear =  () => getDate().getFullYear();

    return getDay() + '/' + getMonth() + '/' + getYear();

}

// export const arraydays = ["1 dia","2 dias", "3 dias","4 dias","5 dias",
// "6 dias","7 dias","10 dias","15 dias","20 dias","1 mês"]