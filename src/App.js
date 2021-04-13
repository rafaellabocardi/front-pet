import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Button from './components/Button'
import Footer from './components/Footer'
import Lista from './components/Lista'
import AddEditCadastro from './components/AddEditCadastro'
import EditCadastro from './components/EditCadastro'
import About from './components/About'  


const App = () => {
  const [showAddCadastro, setShowAddCadastro] = useState(false)
  const [cadastros, setCadastros] = useState([])
  
  useEffect(() => {

    getCadastros()
  
  }, []);
  
  const getCadastros = async () => {
    const cadastrosFromServer = await fetchCadastros() 
    setCadastros(cadastrosFromServer)
  }

  //Fetch Lista
  const fetchCadastros = async () => {
    const res = await fetch('http://localhost:5000/Pet')
    const data = await res.json()

    return data
  }

  //Add text
  const addCadastro = async (cadastro) => {
  const res = await fetch('http://localhost:5000/Pet',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(cadastro)
  })
  const data = await res.json()

  setCadastros([...cadastros, data])
  }


  
  //editar cadastro
  const [showEditCadastro, setShowEditCadastro] = useState(false)
  const [objeditar, setObjeditar] = useState({})
  
  const editarCadastro = (obj) => {   
    setShowAddCadastro(true);
    setObjeditar(obj);
  }

  const editCadastro = async (obj) => {
  const res = await fetch('http://localhost:5000/Pet',{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
  const data = await res.json()
  
  setShowEditCadastro(false);
  getCadastros();
  }



  //delete Cadastro
  const deleteCadastro = async (id) => {
  await fetch(`http://localhost:5000/Pet/${id}`, {
    method: 'DELETE'
  })
  setCadastros(cadastros.filter((cadastro) => cadastro.petId !== id ))
  }


return (
    <Router>
    <div className="container">
      <header className='header'>
        <h1>Cadastrar Pet</h1>
        
        {(!showAddCadastro && !showEditCadastro) && 
        <Button 
        color={'green'} 
        text={'Cadastrar'} 
        onClick={() => setShowAddCadastro(true)} />}

        {(showAddCadastro || showEditCadastro) &&
        <Button 
        color={'red'} 
        text={'Fechar'} 
        onClick={() =>{ setShowAddCadastro(false); setShowEditCadastro(false)}} />
        }
        
      </header>
      <Route path='/' exact render={(props) => (
        <>
          {showAddCadastro && <AddEditCadastro  obj={objeditar} onEdit={editCadastro} onAdd={addCadastro} />} 
          {/* {showEditCadastro && <EditCadastro obj={objeditar}  />}  */}
          
          {cadastros.length > 0 ? (
           <Lista 
            cadastros={cadastros} 
            onDelete={deleteCadastro}
            onEdit={editarCadastro}
           />) : ('Nenhum pet cadastrado ainda')}

        </>
      ) } />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  )
}

export default App


