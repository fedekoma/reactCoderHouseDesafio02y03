import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar nombre="navFede">
        <CartWidget/>
      </NavBar>
      
      <ItemListContainer greeting="Hola amigos"/>
      

      
      
      
      {/*
      <Componente propiedad={
   <Comp/>
   <Comp/>
   <Comp/>
   <Comp/>
      } propiedad="" />
      */}
      

    </div>
  );
}

export default App;
