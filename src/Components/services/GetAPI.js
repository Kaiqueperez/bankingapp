import axios from "axios";

const url = 'https://run.mocky.io/v3/89db3134-4be9-4b37-8e52-21533c7da3ec'

const GetAPI = () => {

    return axios.get(url)
    .then(res => {
        const data = res.data
        
       return data
        

    })
    .catch(error => console.log(error))

    
}

export default GetAPI