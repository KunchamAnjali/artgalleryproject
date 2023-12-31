/*import './index.css';
import validation from './validation';
import { useRef,useState } from 'react'
function Signup() {
    const [values,setvalues] =useState({
      name: '',
      password: '',
      confirmpassword: ''
    })
      const [errors,setError] = useState({})
     
    function handleChange(e){
      setvalues({...values,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
      e.preventDefault();
      setError(validation(values));
    }

   
    
     const inputRef=useRef(null);
     const [image,setImage] = useState("");
    
     const handleImageClick= () => {
      inputRef.current.click();
     }; 

     const handleImageChange=(event) => {
      const file=event.target.files[0];
      console.log(file);
      setImage(event.target.files[0]);
     };
      
      return(
        <div className='wrap'>
        <form onSubmit={handleSubmit}>
            <div onClick={handleImageClick}>
              {image ? <img src={URL.createObjectURL(image)} alt="" /> :
              <img src="https://th.bing.com/th/id/OIP.djrHhPrOVynppSdGJ2dtPgHaHa?rs=1&pid=ImgDetMain" alt=""/>}
              <input
               type="file" 
                ref={inputRef} 
                onChange={handleImageChange} 
                style={{display: "none"}}
                />
            
            </div>
            <div classname="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="enter username" value={values.name} name="name" onChange={handleChange}/><br/>
            {errors.name && <p style={{color: "red", fontSize: "13px"}}>{errors.name}</p>}
            <label><b>Password</b></label>
            <input type="password" placeholder="enter password" value={values.password} name="password" onChange={handleChange} /><br/>
            {errors.password && <p style={{color: "red", fontSize: "13px"}}>{errors.password}</p>}
            <label><b>Confirm Password</b></label>
            <input type="password" placeholder="confirm password" value={values.confirmpassword} name="confirmpassword" onChange={handleChange}/><br/>
            {errors.confirmpassword && <p style={{color: "red", fontSize: "13px"}}>{errors.confirmpassword}</p>}
            <button type="submit">Signup</button>
            <input type="checkbox" checked=""/>Remember me
            </div>
            <div className="contianer" style={{backgroundColor:"#f1f1f1"}}>
              <button type="button" className="cancelbtn">Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
        </div>
    );
}

export default Signup;
*/
import './index.css';
import validation from './validation';
import { useRef,useState } from 'react'
function login() {
    const [values,setvalues] =useState({
      name: '',
      password: ''
    })
      const [errors,setError] = useState({})
     
    function handleChange(e){
      setvalues({...values,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
      e.preventDefault();
      setError(validation(values));
    }

   
    
     const inputRef=useRef(null);
     const [image,setImage] = useState("");
    
     const handleImageClick= () => {
      inputRef.current.click();
     }; 

     const handleImageChange=(event) => {
      const file=event.target.files[0];
      console.log(file);
      setImage(event.target.files[0]);
     };
      
      return(
        <div className='wrap'>
        <form onSubmit={handleSubmit}>
            <div onClick={handleImageClick}>
              {image ? <img src={URL.createObjectURL(image)} alt="" /> :
              <img src="https://th.bing.com/th/id/OIP.djrHhPrOVynppSdGJ2dtPgHaHa?rs=1&pid=ImgDetMain" alt=""/>}
              <input
               type="file" 
                ref={inputRef} 
                onChange={handleImageChange} 
                style={{display: "none"}}
                />
            
            </div>
            <div classname="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="enter username" value={values.name} name="name" onChange={handleChange}/><br/>
            {errors.name && <p style={{color: "red", fontSize: "13px"}}>{errors.name}</p>}
            <label><b>Password</b></label>
            <input type="password" placeholder="enter password" value={values.password} name="password" onChange={handleChange} /><br/>
            {errors.password && <p style={{color: "red", fontSize: "13px"}}>{errors.password}</p>}
            <button type="submit">Login</button>
            <input type="checkbox" checked=""/>Remember me
            </div>
            <div className="contianer" style={{backgroundColor:"#f1f1f1"}}>
              <button type="button" className="cancelbtn">Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
        </div>
    );
}

export default login;

