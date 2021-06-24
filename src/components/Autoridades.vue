<template>
	<v-container pading>
	<!-- <v-form @submit="onSubmit"> -->
		
            <h2>Autoridades en localStorage</h2>
			<v-row>
				<v-col cols="12" md="3">
					<v-text-field
						v-model.trim="autoridad.nombre"						
						label="Nombre"
						required
					>
                    </v-text-field>
				</v-col>

				<v-col cols="12" md="3">
					<v-text-field
						v-model.trim="autoridad.apellido"						
						label="Apellido"
						required					>
                    </v-text-field>
				</v-col>
                <v-col cols="12" md="3">
                    <v-select 
                        :items="cargos" 
                        item-text="nombre" 
                        filled label="Select Cargo" 
                        background-color="transparent" 
                        v-model="autoridad.cargo">
                    </v-select>
                </v-col>			
			</v-row> 
            <v-col cols="12" md="4">					
				<v-btn class="mt-6" text color="primary" @click="agregarAutoridad()"> Agregar </v-btn>
			</v-col> 

            <br>

            <v-layout>
                <v-flex >
                    

                <v-card class="pa-5">
                <v-toolbar-title>Autoridades</v-toolbar-title>	
                
                <br>
                <v-data-table 
                    :headers="headers"
                    :items="autoridades"
                    :items-per-page="5"
                    class="elevation-1"
                    >
                    
                    <template v-slot:item.actions="{ item }">                        
                        <v-icon small @click="eliminarAutoridad(item)">mdi-delete</v-icon>
                    </template>
                    
                </v-data-table>	
                </v-card>
                </v-flex>
            </v-layout>         
		
	<!-- </v-form> -->

</v-container>  
    
</template>

<script>
	export default {
		data() {
        return {
            autoridad: {
                nombre: "",
                apellido: "",
                cargo: ""                
            },
            headers: [                      
            { text: 'NOMBRE', value: 'nombre' },
            { text: 'APELLIDO', value: 'apellido' },  
            { text: 'CARGO', value: 'cargo' }, 
            { text: "ACCIONES", value: "actions", sortable: false },                 
            ],
            autoridades: [],
            cargos: []
        };
    },
    methods: {
        agregarAutoridad() {
            // if (
            //   this.autoridad.nombre != null &&
            //   this.autoridad.apellido != 0 &&
            //   this.autoridad.cargo != null 
            // ) {
            this.autoridades.push({
                nombre: this.autoridad.nombre,
                apellido: this.autoridad.apellido,
                cargo: this.autoridad.cargo                
            });
            // }
            this.autoridad = {
                nombre: "",
                apellido: "",
                cargo: "" 
            };
            localStorage.setItem("autoridad-vue", JSON.stringify(this.autoridades));
        },
        // editarautoridad(i){
        //   this.autoridades[i].nombre='nombre';
        //   this.autoridades[i].nombre='nombre';
        //   this.autoridades[i].cargo='cargo';
        //   localStorage.setItem('autoridad-vue',JSON.stringify(this.autoridades));
        // },
        eliminarAutoridad(i) {            
            this.autoridades.splice(i, 1);
            localStorage.setItem("autoridad-vue", JSON.stringify(this.autoridades));
        },
        getCargos(){
        const path ='/cargos'

        this.axios.get(path).then((response) => {
          this.cargos = response.data
          console.log(this.cargos)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    },
    computed: {        
        cargos_list() {
            return JSON.parse(this.partidos);
        }
    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem("autoridad-vue"));
        if (datosDB === null) {
            this.autoridades = [];
        } else {
            this.autoridades = datosDB;
        }
        // console.log(this.localidades);
        // console.log(this.partidos);
        this.getCargos()
    },
    
	};
</script>
