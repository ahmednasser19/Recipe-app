import React  , {useState ,useEffect}from 'react'
import styled from "styled-components";
import axios from 'axios' ;

const EditRecipe = (props) => {

    // creating hooks used for our inputs 
    const [title , setTitle] = useState('');
    const [recipe , setRecipe] = useState('');
    const [authorname , setAuthorname] = useState('');
    const [message , setMassege] = useState('');


    // funtion when you click on it it passes the data to the database by axios
    const   changeOnClick  = e =>{ 
        e.preventDefault(); // not lodding the page again 
        
        const recipes =  {
            title, 
            recipe, 
            authorname

        };
        /// to clear the form after subming it

        setTitle('');
        setRecipe('');
        setAuthorname('');



        /// sending it to the MongoDb using axios
        axios.put(`/recipes/update/${props.match.params.id}`,recipes)
        .then(res => setMassege(res.data))
        .catch(err => {
            console.log(err);
        })
    };

    useEffect(() => {
        axios.get(`/recipes/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setRecipe(res.data.recipe),
            setAuthorname(res.data.authorname)

        ])
        .catch(error => console.log(error));
    },[]) ;

    return (

     <AddRecipeContainer>
         
        <div className="container">
        <h1>Edit  Recipe</h1>
        <span className="message"> {message}</span>
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="authorname">Cooker  Name</label>
                    <input type="text"
                     className="form-control" 
                     value = {authorname}
                     onChange={e => {setAuthorname(e.target.value)}}
                     placeholder="Cooker Name" 
                      
                      />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title of the Recipe</label>
                    <input type="text"
                     className="form-control" 
                     value ={title}
                     onChange={e => {setTitle(e.target.value)}}
                     placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="recipe"> Ingredients  of the Recipe</label>
                    <textarea 

                    className="form-control" 
                    value = {recipe}
                    onChange={e => {setRecipe(e.target.value)}}
                    rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Edit Recipe</button>
            </form>
        </div>
    </AddRecipeContainer>
    )
}

export default EditRecipe;
 

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
    .message {
        font-weight : 900; 
        color :tomato ;
        padding :1rem 1rem 1rem 0 ; 
    }

`;