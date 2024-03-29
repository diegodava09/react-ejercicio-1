const operations = require('../calculator/operations.js')
const { suma, resta, multiplicacion, division } = operations

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
            <h3>Resultado: {resultado}</h3>
        </div>
    )
}

export default Resultado;