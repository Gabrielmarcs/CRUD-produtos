function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            <input type="text" onChange={eventoTeclado} value={obj.nome} name='nome' placeholder='Nome' className='form-control'/>
            <input type="text" onChange={eventoTeclado} value={obj.marca} name='marca' placeholder='Marca' className='form-control'/>

            {
                botao
                ?
                <input type="button" value='Cadastrar' onClick={cadastrar} className='btn btn-primary'/>
                :
                <div>
                    <input type="button" value='Alterar' className='btn btn-warning' onClick={alterar}/>
                    <input type="button" value='Remover' className='btn btn-danger' onClick={remover}/>
                    <input type="button" value='Cancelar' className='btn btn-secondary' onClick={cancelar}/>
                </div>
            }
            

        </form>
    )
}
export default Formulario;