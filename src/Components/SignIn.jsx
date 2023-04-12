
import React ,{useState}from 'react'
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const SignIn = () => {
  const [data,setData]=useState({
    email:'',
    password:''
 })
 const{email,password}=data
 const changeHandle=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
 }
 const sumbitHandle=(e)=>{
e.preventDefault();
console.log(data)
alert("submitted")
 }
  return (
    <>
     <div className='full'>
    <div className='left-half' style={{backgroundColor:"purple"}}>
        <h3>dribbble</h3>
        <p>Discover the world’s top Designers & Creatives.</p>
    </div>
    <div className='right-half'>
    <div className='sigin-div'>
    <h6 className='already' style={{color:"white"}}>Not a member?</h6>
      <Link to="/signup"><p className='p-sign-in'> SignUp now</p></Link>
    </div><br/>
    <div className='google-sign-div'>
      <h3>Sign up to Dribbble</h3>
      <Link to="https://accounts.google.com/gsi/select?client_id=32073492121-s6ur8ti01mh34gq2bpbufb8ujdfrpn4v.apps.googleusercontent.com&ux_mode=redirect&login_uri=https%3A%2F%2Fdribbble.com%2Fauth%2Fgoogle_one_tap_signup%2Fcallback&ui_mode=card&as=wCNrcEkl6TSrZu3FmN4Kyg&g_csrf_token=a464522d7d55b968"><button className="google"><span style={{backgroundColor:"white",marginRight:"20px",padding:"3px",borderRadius:"3px"}} ><FcGoogle/></span>Sign up with Google</button></Link>
      <Link to="https://api.twitter.com/oauth/authenticate?oauth_token=4lj6OAAAAAAABoZfAAABh3P1gaw"><button style={{border:"none",marginLeft:"35px",textAlign:"center"}}><BsTwitter/></button></Link>
    </div><br/>
    <div style={{marginLeft:"130px" ,color:"blue"}}>or</div>
    <br/>
<form onSubmit={sumbitHandle}>
    
    <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} name='email' onChange={changeHandle}/><br/>
  <label for="floatingInput">email address</label>
   </div>
    <div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} name='password' onChange={changeHandle}/><br/>
  <label for="floatingPassword">password</label>
   </div><br/>
  <input type="submit" value="sign in" className='submit'/>
</form>
    </div>
    </div>
    </>
  )
}

export default SignIn
