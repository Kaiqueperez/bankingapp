import axios from "axios";

const url = 'https://run.mocky.io/v3/764db656-aa21-4cc3-8bcd-ce19db137205'

  const  GetProduct = () => {

    return axios.get(url)
    .then(res => {
        const data = (res.data) 
        
        return data
        

    })
    .catch(error => console.log(error))

    
}

export default GetProduct