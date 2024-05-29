import actionTypes from './actionTypes'
import { callApiRegister, callApiLogin } from '../../../api/authenLogin'
export const registerAction = (payload) => async (dispatch ) => {
    try {
        const response = await callApiRegister(payload)
        ///api phải trả về token và
        // console.log('response.data.token',response.data.token)
        // if (response?.data.err === 0) {
            if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.REGISTER__SUC,
                data: response.data.token
             })
        }
        else {
            dispatch({
                type: actionTypes.REGISTER__FAIL,
                data:response.data.msg
             })
        }
    }
    catch (eror){
         dispatch({
            type: actionTypes.REGISTER__FAIL,
            data:null
         })
    }
}

//ham login 

export const loginAction = (payload) => async (dispatch ) => {
    try {
        const response = await callApiLogin(payload)
        ///api phải trả về token và
        console.log('response',response)
        // if (response?.data.err === 0) {
        //     if (response?.data.err === 0) {
        //     dispatch({
        //         type: actionTypes.LOGIN__SUC,
        //         data: response.data.token
        //      })
        // }
        // else {
        //     dispatch({
        //         type: actionTypes.LOGIN__FAIL,
        //         data:response.data.msg
        //      })
        // }
    }
    catch (eror){
         dispatch({
            type: actionTypes.LOGIN__FAIL,
            data:null
         })
    }
}