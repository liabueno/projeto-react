// componente
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

// propriedade do componente
//validação a nível de programador, vê o erro no console
Item.propTypes  = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0
}

export default Item;