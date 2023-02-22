import { suma, resta, multiplicacion, division } from '../calculator/operations.js'

function Resultado(props){

    const num1 = props.num1;
    const num2 = props.num2;
    const op = parseInt(props.op);
    let resultado = "No hay todavia";
    console.log(op)
    switch(op){
        case 0: 
            resultado = suma(num1,num2);
            break;
        case 1:
            resultado = resta(num1,num2);
            break;
        case 2:
            resultado = multiplicacion(num1,num2);
            break;
        case 3:
            resultado = division(num1,num2);
            break;
        default:
            resultado ="Operación inválida";
            break;
    }

    return (
        <div className="resultado">
            <h1>Resultado: {resultado}</h1>
        </div>
    )
}

export default Resultado;