import React, { Component } from 'react';
const axios = require('axios').default;


class Content1 extends Component {
	constructor(props){
        super(props);
        this.state = {
            plants: [
                {
                    "id": 8,
                    "common_name": "Celery",
                    "family_name": "Apiaceae",
                    "scientific_name": "Apium L.",
                    "cost": 78
                  },
                  {
                    "id": 9,
                    "common_name": "Alkali Milkvetch",
                    "family_name": "Fabaceae",
                    "scientific_name": "Astragalus tener A. Gray",
                    "cost": 54
                  },
            ],
            nombre : ""
        };
    }

    async componentWillMount(){
        //se ejecuta antes de montar el renderizado del html
        console.log("se esta ejecutando antes de contar el html")
    }

    async componentDidMount(){
        //console.log('ya se monto el html en el mount')
        //fetch
        //axios
        /*
        fetch('https://plants-backend.now.sh/plants')
        .then((respuesta) => {
            return respuesta.json()
        }).then((plantas)=>{
            this.setState({
                plants : plantas
            })
        })*/

        /*
       let respuesta = await fetch('https://plants-backend.now.sh/plants')
        let plantas = await respuesta.json();
        this.setState({plants:plantas})*/
        
        
        try {
            let respuesta = await axios.get('https://plants-backend.now.sh/plants')
            if(Array.isArray(respuesta.data)){
                this.setState({plants : respuesta.data})
            }else{
                this.setState({plants : respuesta.data})

            }

        } catch (error) {
            console.log('----------------')
            console.log('error')
            console.log('----------------')

        }

        /*
        axios.get('https://plants-backend.now.sh/plants')
        .then((respuesta) =>{
            this.setState({plants : [respuesta.data]})
        }).catch((error) => {
            console.log('error')
        })*/
       
    }

     cambiarStado = () =>{
        alert('se cambio el estado')
        this.setState({nombre:'hello nombre'})
        console.log(this.state.nombre)
    }

    handleEnviarForumario = async (e) =>{
        e.preventDefault();
        let configuracion = {
            method:'POST',
            body: JSON.stringify({
                common_name:document.querySelector('#nombre_comun').value,
                family_name:document.querySelector('#nombre_family').value,
                scientific_name:document.querySelector('#nombre_cientifico').value,
                cost:document.querySelector('#cost').value
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        };
        let respuesta = await fetch('https://plants-backend.now.sh/plants',configuracion);
        let planta = await respuesta.json();
    }

    handleModificarFormularo = async(e) => {
        e.preventDefault();
         let data = {
                common_name:document.querySelector('#nombre_comun').value,
                family_name:document.querySelector('#nombre_family').value,
                scientific_name:document.querySelector('#nombre_cientifico').value,
                cost:document.querySelector('#cost').value
        };
        
        let respuesta = await axios.put('https://plants-backend.now.sh/plants/32', data);
        //let plata = await respuesta.json();
        console.log(respuesta.data);
    }

    render() {
        let {plants} = this.state;
        return (
            <article className="row">
                <article className="col-lg-12">
                <button className="btn btn-primary" onClick={this.cambiarStado}>Cambiar nombre</button>

                    <table id="tbl-mensualidades" className="table table-bordered">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre común</th>
                            <th>Nombre de Familia</th>
                            <th>Nombre Científico</th>
                            <th>Costo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plants.map((plant, id) => {
                                return (<tr key = {id}>
                                    <td>{plant.id}</td>
                                <td>{plant.common_name}</td>
                                <td>{plant.family_name}</td>
                                <td>{plant.scientific_name}</td>
                                <td>{plant.cost}</td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                    <form>
                        <label>Nombre comun</label>                        
                        <input type="text" id="nombre_comun"/>
                            
                        <label>Nombre familia</label>
                        <input type="text" id="nombre_family"/>
                       
                        <label>Nombre cientifico</label>
                        <input type="text" id="nombre_cientifico"/>
                       
                        <label>costo</label>
                        <input type="text" id="cost"/>
                            
                        <input type="submit" id="submit" onClick={this.handleEnviarForumario} value="enviar"/>
                        <input type = "submit" value = "Modificar" onClick = {this.handleModificarFormularo}/>

                             </form>
                </article>
            </article>
        );
    }
}

export default Content1;