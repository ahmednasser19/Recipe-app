import React  , {useState  , useEffect} from 'react' ; 
import {Route} from 'react-router-dom'; 
import axios from 'axios'; 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';
import Recipe from './components/Recipe';
import EditRecipe from './components/EditRecipe';


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/recipes').then(res => setPosts(res.data))
    .catch(error => console.log(error));
  })
  return (
    <div className="App">
     <Header />
     <Navbar /> 
     <Route exact path='/' render={() => <Recipes  posts= {posts} />} /> 
     <Route  path='/recipe/:id' render={(props) => <Recipe  {...props} posts= {posts} />} /> 
     <Route  path='/update/:id' render={(props) => <EditRecipe  {...props} posts= {posts} />} /> 

     <Route path='/add-recipe' component={AddRecipe} />
     <Footer /> 
     
     
    </div>
  );
}

export default App;
