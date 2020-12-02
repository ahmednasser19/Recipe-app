import React , {useState , useEffect} from 'react'
import styled from "styled-components" ; 
import axios from 'axios';
import spinner from '../spinner.gif';
import { Link } from 'react-router-dom';
const Recipe  = (props) => {

    const [title , setTitle] = useState('');
    const [recipe , setRecipe] = useState('');
    const [authorname , setAuthorname] = useState('');
    const [fileName , setFileName] = useState("");


    // get the data form DB
    useEffect(() => {
        axios.get(`/recipes/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setRecipe(res.data.recipe),
            setAuthorname(res.data.authorname),
            setFileName(res.data.recipeImage)
        ])
        .catch(error => console.log(error));
    },[]) ;


    return (    
            <MainContainer>
                <img src={`/uploads/${fileName}`} alt="..." style={{margin : "0 auto ", width:"40%" ,display :"flex"}} />
                {!title || !recipe ||! authorname ? <img src={spinner} alt="Lodding..."/> : 
                <>
                    <h2>{title}</h2>
                    <p>{recipe}</p>
                    <p className="badge badge-secondary">{authorname}</p>
                    <br/>
                    <Link to="/" type="submit" className="btn btn-primary">Back to Home</Link>
          
                </>
                }
                
            </MainContainer>
    )
}

export default Recipe


///MAIN CONTAINER
const MainContainer = styled.div`
        
        

        margin : 6rem ; 
        padding: 3rem 14rem;

        h2{
            text-align:center;
            font-weight : 900;
            color: var(--dark-green)
        }

        img { 
            
            display: block : 
            margin :auto ; 
        }

        .btn-primary {
           
            background: var(--dark-green);
            &:hover {
                background: var(--ligh-green);
            }        
`;