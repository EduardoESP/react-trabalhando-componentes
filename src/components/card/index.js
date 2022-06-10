import { useState } from "react";
import Button from "../Button";

const Card = () =>{

    const [valor, setValor] = useState(0)

    function Adicionar (){
        setValor(valor + 1)
    }

    function Remover (){
        setValor(valor - 1)
    }

    return(
        <div className="card" stylename="width: 18rem;" >
            <div className="card-header" >
                Meu Primeiro Card
            </div>
            <div>

                <Button type="button" className="btn btn-success" onClick={Adicionar}>
                    Adicionar
                </Button>
                
                <Button type="button" className="btn btn-danger" onClick={Remover}>
                   Remover
                </Button>
               <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;