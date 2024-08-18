import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1995}/>
                <Item marca="Toyota" ano_lancamento={1965}/>
                <Item marca="Hyundai"/>
                <Item ano_lancamento={1965}/>
            </ul>
        </>
    )
}

export default List;