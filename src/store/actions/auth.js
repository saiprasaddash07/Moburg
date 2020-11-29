import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    }
};

export const authSuccess = (token,userId) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        idToken : token,userId
    }
};

export const authFail = (error) => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
};

export const checkAuthTimeOut = () => {
    
}

export const auth = (email,password,isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email,password,returnSecureToken : true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfLjmnWbEBHbXyeseDzERG1ws2HCj_RRs'
        if(!isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfLjmnWbEBHbXyeseDzERG1ws2HCj_RRs'
        }
        axios.post(url,authData)
            .then(response=>{
                console.log(response);
                dispatch(authSuccess(response.data.idToken,response.data.userId));
            }).catch(e=>{
                dispatch(authFail(e.response.data.error));
            });
    }
};