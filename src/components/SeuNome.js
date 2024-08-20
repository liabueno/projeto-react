function SeuNome({setNome}){
    return(

        <div>
            <p>Qual seu nome?</p>
            <input type="text" placeholder="Qual é o seu nome?" 
            onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}
export default SeuNome;