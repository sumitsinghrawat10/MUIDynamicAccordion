import React from 'react'
import eye from './assests/eye.svg'
const Show = () => {
    const [passwordShown, setPasswordShown] = React.useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
  return (
    <div>
         <div style={{display:'flex',flexDirection:"row", justifyContent:"center",paddingTop:" 1.5rem" }}>
              <label htmlFor="">
                Password 
              </label>
              <input
               type={passwordShown ? "text" : "password"}
               placeholder="*****"
                
                
                
              />
              <div >
                <img  onClick={togglePasswordVisiblity} src={eye} style={{cursor :'pointer'}} alt="" />
              </div>
                         </div>
    </div>
  )
}

export default Show