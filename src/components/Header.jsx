

function Header({ text = "FEEDBACK UI", bgColor ="rgba(0,0,0,0.4)", textColor="#ff6a95" }) {
const headerStyle ={
  backgroundColor: bgColor,
  color: textColor,
}


  return (
   <header style={headerStyle} > 
    <div className="container">
      <h2>
        {text}
       
      </h2>
    </div>
   </header>
  )
}
   


export default Header;