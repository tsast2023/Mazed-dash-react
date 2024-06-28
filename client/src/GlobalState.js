import React , {createContext , useState , useEffect} from 'react'
import  axios  from 'axios'
import Cookies from "js-cookie"

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
 const token = Cookies.get('token');
  const [Categories , setCategories] = useState();
  const [Acheteur , setAcheteur] = useState();
  const [Vendeur , setVendeur] = useState();
  const [Admin , setAdmin] = useState();
  const [Products , setProducts] = useState();
  const [tutoriel , setTutotiel]= useState();
  const [carteRech , setCarteRech] = useState();
  const[bids , setBids] = useState();
  const[permissions , setPermissions] = useState();

  useEffect(()=>{
    const getAllAcheteur = async() =>{
      try {
          const  res = await axios.get('http://192.168.0.118:8081/admin/users/Acheteur');
          console.log("Acheteur:",res.data);
          setAcheteur(res.data)
      } catch (error) {
          console.log(error);
      }
  }
  const getAllVendeur = async() =>{
    try {
        const  res = await axios.get('http://192.168.0.118:8081/admin/users/Vendeur');
        console.log("Vendeur:",res.data);
        setVendeur(res.data)
    } catch (error) {
        console.log(error);
    }
}
const getAllAdmin = async() =>{
  try {
      const  res = await axios.get('http://192.168.0.118:8081/admin/users/Admin');
      console.log("Admin:",res.data);
      setAdmin(res.data)
  } catch (error) {
      console.log(error);
  }
}

    const getAllCategories = async() =>{
        try {
            const  res = await axios.get('http://192.168.0.118:8081/api/category/getAll');
            console.log("categories:",res.data);
            setCategories(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getAllProducts = async() =>{
        try {
            const  res = await axios.get('http://192.168.0.118:8081/api/product/getAll');
            console.log("Products:",res.data);
            setProducts(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getAllTuto = async ()=>{
      try {
        const res = await axios.get('http://192.168.0.118:8081/api/tuto/getAll');
          console.log('tutorial:' , res.data);
          setTutotiel(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    const getCarteRechar = async()=>{
      try {
        const res = await axios.get('http://192.168.0.118:8081/api/carte/getAll');
        console.log('cartes:' , res.data);
        setCarteRech(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    const getAllBids = async()=>{
      try {
        const res = await axios.get('http://192.168.0.118:8081/api/bid/getAll')
        console.log("all bids:" , res.data)
        setBids(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    const getAllPermissions = async()=>{
      try {
        const res = await axios.get('http://192.168.0.118:8081/admin/permissions')
        console.log("all permissions:" , res.data)
        setPermissions(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    
getAllCategories();
getAllProducts();
getAllTuto();
getAllBids();
getCarteRechar();
getAllPermissions();
getAllAcheteur();
getAllVendeur();
getAllAdmin(); 
  } , [token])
  
   const state ={
    Categories : Categories,
    Products : Products,
    tutorials : tutoriel,
    bids : bids,
    cartes: carteRech,
    Permissions : permissions ,
    Acheteur : Acheteur ,
    Vendeur : Vendeur ,
    Admin : Admin 


  }

  return(
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
  )
}