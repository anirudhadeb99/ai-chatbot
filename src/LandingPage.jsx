import { useState } from "react"
import "./LandingPage.css"
import botImg from "./assets/Bot_img.svg"
import Card from "./components/Card"
// import {mockData} from "./mock_data/SampleData"


const LandingPage = ()=>{

    const [inputText,setInputText] = useState("");
    const [data,setData] = useState([]);
    const handleAsk = ()=>{
       
    }

    return(
        <div className="container">
            <div>
                Past Conversations
            </div>
            <div>
            <div className="wrapper">
               <div className="color-primary ubuntu-bold" style={{paddingLeft:"20px",paddingTop:"10px"}}>
               Bot AI
               </div>
               <div className="default-container">
                <div className="ubuntu-mid">
                    How Can I Help You Today?
                </div>
                <img src={botImg} alt="bot-image" className="img"/>
               </div>
               <div className="col"  style={{marginLeft:"20px"}}>
                <div className="row">
                <Card question={""}/>
                <Card question={""}/>
                </div>
                <div className="row">
                <Card question={""}/>
                <Card question={""}/>
                </div>
               </div>
               <div className="row" style={{marginTop:"80px",marginLeft:"30px"}}>
                <input type="text" className="input" onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
                <button className="button" onClick={()=>handleAsk}>Ask</button>
                <button className="button">Save</button>
               </div>
            </div>
            </div>
            

        </div>
    )

}

export default LandingPage;