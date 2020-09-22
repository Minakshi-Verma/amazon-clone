import axios from "axios";
import Cookie from 'js-cookie'
import{USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from "../constants/userConstants"

//Register actionCreator
const register = (name, email, password) =>async(dispatch, getState)=>{
    dispatch({type: USER_REGISTER_REQUEST, payload:{name, email, password}})
    try{
        const {data} = await axios.post('/api/users/register', {name, email, password})
        console.log("from register useraction",data.name)
        dispatch({type: USER_REGISTER_SUCCESS, payload: data})
        //set the cookie to store the userdata 
        
       
        // const {userSignin: {userInfo}}= getState()
        Cookie.set('userInfo', JSON.stringify(data))
    }
    catch(error){
       dispatch({type: USER_REGISTER_FAIL, payload: error.message}) 
    }
}


//signin action creator
const signin = (email, password) =>async(dispatch, getState)=>{
    dispatch({type: USER_SIGNIN_REQUEST, payload:{email,password}})
    try{
        const {data} = await axios.post('/api/users/signin', {email,password})
        console.log("from useraction",data.name)
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data})
        //set the cookie to store the userdata 
        
       
        const {userSignin: {userInfo}}= getState()
        Cookie.set(userInfo, JSON.stringify(data))
    }
    catch(error){
       dispatch({type: USER_SIGNIN_FAIL, payload: error.message}) 
    }
}


export {register, signin}