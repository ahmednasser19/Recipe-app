import React from 'react'
import styled from "styled-components";
const AddRecipe = () => {
    return (

     <AddRecipeContainer>
         
        <div className="container">
        <h1>Add New Recipe</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="authorname">Cooker  Name</label>
                    <input type="text" className="form-control"  placeholder="Cooker Name" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title of the Recipe</label>
                    <input type="text" className="form-control" placeholder="Title" />
                </div>
                <div class="form-group">
                    <label htmlFor="recipe"> Ingredients  of the Recipe</label>
                    <textarea class="form-control"  rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>
            </form>
        </div>
    </AddRecipeContainer>
    )
}

export default AddRecipe;
 

////AMin container 
const AddRecipeContainer = styled.div`

    margin:3rem auto ; 
    padding :4 rem ; 
    width : 30rem ; 


    h1 { 
    font-weight : 900; 
    color: var(--dark-green);
    }
    .btn-primary {
        margin-top :2rem; 
        background: var(--dark-green);
        &:hover {
            background: var(--ligh-green);
        }
    }

`;