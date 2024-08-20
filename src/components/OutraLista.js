function OutraLista({itens}){

    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => ( //id unico normalmente, esse é um quebra galho
                    <p key={index}>{item}</p> //pegando cada item de itens
                ))) : (
                    <p>Não há itens na lista</p>
                ) //ternário
            } 
        </>
    )

}
export default OutraLista;