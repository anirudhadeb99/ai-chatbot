import "./Card.css"
const Card = ({heading,subtext,handleClick})=>{
    return(
      <div className="card" onClick={()=>handleClick(heading)}>
        <div className="ubuntu">{heading}</div>
        <div className="openSans">{subtext}</div>
      </div>
    )
}

export default Card;