import { useState } from 'react'


const AddEditCadastro = ({ onAdd, obj, onEdit }) => {
    
    const [nomepet, setNomepet] = useState('')
    const [tipo, setTipo] = useState('')
    const [porte, setPorte] = useState('')
    
    var objeto = {} 
    
    if(obj.petId != null){
        console.log(obj)
            // setNomepet(obj.nome)
            // setTipo(obj.tipo)
            // setPorte(obj.porte)

            objeto = {
            petId: obj.petId,
            nome: nomepet,
            tipo: tipo,
            porte: porte
        }
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(obj.petId != null){
          onEdit(objeto)  
          return
        }
        
        if(!nomepet){
            alert('Por favor preecha os campos para cadastrar')
            return 
        }

            objeto = {
            nome: nomepet,
            tipo: tipo,
            porte: porte
        } 
    
        onAdd(objeto)
        
        setNomepet('')
        setTipo('')
        setPorte('')

    }
    function handleChangeNomePet(event){setNomepet(event.target.value)}
    function handleChangeTipo(event){setTipo(event.target.value)}
    function handleChangePorte(event){setPorte(event.target.value)}

    return (
        <form className='add-form' onSubmit= {onSubmit}>
           <div className='form-control'>
                <label>Nome do pet</label>
                <input type='text' placeholder='Digite o nome do pet' value={nomepet} onChange={handleChangeNomePet} />
            </div> 
            <div className='form-control'>
                <label>Tipo do pet</label>
                <input type='text' placeholder='Ex.: cachorro, gato...' value={tipo} onChange={handleChangeTipo}/>
            </div>
            <div className='form-control'>
                <label>Porte do pet</label>
                <input type='text' placeholder='Ex.: pequeno, médio, grande' value={porte} onChange={handleChangePorte}/>
            </div>
            <input type ='submit' value='Salvar cadastro'className='btn btn-block'/>
        </form>
    )
}

export default AddEditCadastro
