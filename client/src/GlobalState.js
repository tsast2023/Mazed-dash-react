import React , {createContext , useState , useEffect} from 'react'
import  axios  from 'axios'
import Cookies from "js-cookie"

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
 const token = Cookies.get('token');
  const [Categories , setCategories] = useState();
  const [Products , setProducts] = useState();
//   const [Avis , setAvis] = useState();
//   const [workers , setWorkers] = useState();
//   const [orderCount , SetOrderCount] = useState(0);
//   const [userCount , SetUsersCount] = useState(0);
//   const [avisCount , SetAvisCount] = useState(0);
  useEffect(()=>{
    
    const getAllCategories = async() =>{
        try {
            const  res = await axios.get('http://192.168.0.126:8081/api/category/getAll');
            console.log("categories:",res.data);
            setCategories(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getAllProducts = async() =>{
        try {
            const  res = await axios.get('http://192.168.0.126:8081/api/product/getAll');
            console.log("Products:",res.data);
            setProducts(res.data)
        } catch (error) {
            console.log(error);
        }
    }
 
getAllCategories();
getAllProducts();
  } , [token])
  
   const state ={
    Categories : Categories,
    Products : Products
    



  }

  return(
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
  )
}