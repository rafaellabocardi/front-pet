import { FaTimes } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa';



const ListaItem = ({ cadastro, onDelete, onEdit }) => {
    return (
        
        <div className='cadastro' >
            <h3>{cadastro.nome}
            <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(cadastro.petId)}/></h3>  
            <p>{cadastro.tipo}<FaEdit style={{color:'black', cursor:'pointer'}} onClick={() => onEdit(cadastro)}/></p>
            <p>{cadastro.porte}</p>  
        </div>
    )
}


//
export default ListaItem