import{USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from "../constants/userConstants"


//Reducer function for userRegister
function userRegisterReducer(state={}, action){
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {
                loading:true
            }
        case USER_REGISTER_SUCCESS:
            return{
                loading:false,
                userInfo: action.payload
            }
        case USER_REGISTER_FAIL:
            return{
                loading:false,
                error: action.payload
            }    
        default:
            return state;
    }
}

//Reducer function for userSignin
function userSigninReducer(state={}, action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {
                loading:true
            }
        case USER_SIGNIN_SUCCESS:
            return{
                loading:false,
                userInfo: action.payload
            }
        case USER_SIGNIN_FAIL:
            return{
                loading:false,
                error: action.payload
            }    
        default:
            return state;
    }
}
export {userRegisterReducer, userSigninReducer}