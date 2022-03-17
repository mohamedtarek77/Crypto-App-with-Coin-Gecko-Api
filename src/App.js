
import  React , {useEffect,useState} from "react"
import axios from "axios"
import { Routes ,Route } from "react-router-dom"
import Coins from "./comp/Coins"
import NavBar from "./comp/NavBar"
import Coin from "./routes/Coin"
 
export default function (){

    const [coins,setCoins] = useState([])

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"

    useEffect (()=>{
        axios.get(url).then((response)=>{
            setCoins (response.data)
            console.log(response.data[0])
        }).catch ((error)=>{
            console.log(error)
        })
    },[])



    return ( 
        <>
             <NavBar  />
             <Routes>
                 <Route path="/" element= { <Coins coins= {coins}  />} />
                 <Route path="/coin" element={<Coin/>}>
                     <Route path=":coinId" element={<Coin/>} />
                 </Route>
             </Routes>
           
        </>
    )
}