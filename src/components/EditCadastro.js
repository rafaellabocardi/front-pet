import { useState } from 'react'

const EditCadastro = ({ obj, onEdit }) => {
    
    const [nomepet, setNomepet] = useState(obj.nome)
    const [tipo, setTipo] = useState(obj.tipo)
    const [porte, setPorte] = useState(obj.porte)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!nomepet){
            alert('Por favor preecha os campos para cadastrar')
            return  
        }

        var objeto = {
            petId: obj.petId,
            nome: nomepet,
            tipo: tipo,
            porte: porte
        }

        onEdit(objeto)
        
        setNomepet('')
        setTipo('')
        setPorte('')
    }

    return (
        <form className='add-form' onSubmit= {onSubmit}>
           <div className='form-control'>
                <label>Nome do pet</label>
                <input type='text' placeholder='Digite o nome do pet' value={nomepet} onChange={(e) => setNomepet(e.target.value)} />
            </div> 
            <div className='form-control'>
                <label>Tipo do pet</label>
                <input type='text' placeholder='Ex.: cachorro, gato...' value={tipo} onChange={(e) => setTipo(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Porte do pet</label>
                <input type='text' placeholder='Ex.: pequeno, médio, grande' value={porte} onChange={(e) => setPorte(e.target.value)}/>
            </div>
            <input type ='submit' value='Salvar cadastro'className='btn btn-block'/>
        </form>
    )
}

export default EditCadastro
