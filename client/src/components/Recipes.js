import React ,{useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import axios from 'axios';
const Recipes = ({posts }) => {
const [recipe ,setRecipe] = useState([]);

//// Delete Recipe by id 
const deleteRecipe = id =>{ 
    axios.delete(`/recipes/${id}`)
    .then(res => alert(res.date));
    setRecipe(recipe.filter(elem =>  elem._id !== id));
}

    return (
        <MainContainer>
            {
            posts.map((recipe , key)  => (
               
                <div className="container" key={key}>
                    <img src={`/uploads/${recipe.recipeImage}` } atl="..."  style={{width: "40%"}}/>

                    <Link to={{
                        pathname : `/recipe/${recipe._id}` }}>
                    <h2>{recipe.title}</h2>
                    
                    </Link>
                    <p>{recipe.recipe}</p>
                    <span className="badge badge-secondary p-2">{recipe.authorname}</span>
                    <div className="row my-5">
                        <div className="col-sm-2">
                            <Link  to={`/update/${recipe._id}`} className=" btn btn-outline-success">Edit Recipe </Link>
                        </div>
                        <div className="col-sm-2">
                            <button  onClick={() => deleteRecipe(recipe._id)}  className=" btn btn-outline-danger">Delete  Recipe </button>
                        </div>
                    </div>
                </div>
            ))}
        </MainContainer>
    )
}

export default Recipes;

/// constainer 
const  MainContainer = styled.div`
margin : 7rem 0 ; 

img { 
    width: 10rem; 
    display: block;
    margin :0  auto ; 
}
backgound-color : red; 

`;