import axios from "axios"
import generateUniqueId from "generate-unique-id"





export const SingleRecord = (data) => {

    return {
        type: "SingleRecord",
        payload: data
    }

}

export const UpdateRecord = (data) => {

    return {
        type: "UpdateRecord",
        payload: data
    }

}

export const GetData = (data) => {
    return {
        type: "GetData",
        payload: data
    }
}



export const AddDataPostAsync = (data) => {

    return (dispatch) => {
        
       data.id = generateUniqueId({
                length: 4,
                useLetters: false
            })

        axios.post('http://localhost:3200/Books', data).then((res) => {
            console.log("res", res);

            dispatch(GetDataAsync(res.data))

        }).catch((err) => {
            console.log("err", err);
        })

    }
}

export const GetDataAsync = () => {

    return (dispatch) => {

        axios.get('http://localhost:3200/Books',).then((res) => {
            console.log("res", res);

            dispatch(GetData(res.data))

        }).catch((err) => {
            console.log("err", err);
        })

    }

}

export const singledataAsync = (id) =>{
    return (dispatch) =>{

        axios.get(`http://localhost:3200/Books/${id}`).then((res)=>{
            console.log("res",res);
            dispatch(SingleRecord(res.data))
        }).catch((err) => {
            console.log("err", err);
        })

    }
}

export const DeleteAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3200/Books/${id}`).then((res) => {
            // console.log("res", res.data);
            dispatch(GetDataAsync())
        }).catch((err) => {
            console.log("err", err);
        })
    }
}

export const UpdateRecordAsync = (id) =>{

    return (dispatch) =>{
        
    }

}