import http from './api/apiRucde';


const getData =  async (url) =>{ 
    return await http.get(url).then((response) =>{
        return response.data;
    }).catch((err)=>{
        return err;
    })
}
const postData =  async (url,element) =>{ 
    return await http.post(url,element).then((response) =>{
        return response.data;
    }).catch((err)=>{
        return err;
    })
}
const putData =  async (url,element) =>{ 
    return await http.put(url,element).then((response) =>{
        return response.data;
    }).catch((err)=>{
        return err;
    })
}

const getEntidad = async() => await getData('entidades');
const postEntidad = async(entidad) => await postData('entidades',entidad);

const getCargos = async() => await getData('cargos');
const postCargo = async(cargo) => await postData('cargos/',cargo);
const putCargo = async(id, cargo) => await putData(`cargos/${id}/`,cargo);

const exported = {
    getCargos,
    getEntidad,
    postEntidad,
    postCargo,
    putCargo,
}


export default exported;