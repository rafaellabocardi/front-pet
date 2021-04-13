import ListaItem from './ListaItem'

const Lista = ({ cadastros, onDelete, onEdit }) => {

    return (
        <>
            {cadastros.map((cadastro, index) => (
            <ListaItem 
            key={index} 
            cadastro={cadastro} 
            onDelete={onDelete} 
            onEdit={onEdit} 
            />
            ))}
        </>
    )
}

export default Lista
