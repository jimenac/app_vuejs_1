<template>
<v-container pading>
	<v-form @submit="onSubmit">
		
            <h2>Nuevo Cargo</h2>
			<v-row>
				<v-col cols="12" md="4">
					<v-text-field
						v-model.trim="form.codigo_cargo"
						:counter="10"
						label="Código Cargo"
						required
					></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field
						v-model.trim="form.nombre"
						:counter="10"
						label="Nombre"
						required
					></v-text-field>
				</v-col>

				<!-- <v-col cols="12" md="4">
					<v-text-field v-model="email" label="E-mail" required></v-text-field>
					<v-btn class="mt-6" text color="primary" @click="agregar()"> Agregar </v-btn>
				</v-col> -->
			</v-row>
            <v-btn
                class="mr-4"
                type="submit"
                
            >
                submit
            </v-btn>
            <v-btn :to="{name: 'cargos'}">
                clear
            </v-btn>
		
	</v-form>
</v-container>  
</template>

<script>
	
  export default {
    data () {
      return {
        form: {
            codigo_cargo: "",
            nombre: ""	
        },	
        entidades: [],        
      }
    },
	methods:{
		onSubmit(evt){
            evt.preventDefault()
			const path ='cargos/'

			this.axios.post(path, this.form).then((response) => {				
                this.form.codigo_cargo = response.data.codigo_cargo
                this.form.nombre = response.data.nombre
				alert("Cargo creado exitosamente.")
                // localStorage.setItem('cargos', JSON.stringify(this.cargos));
			})
			.catch((error) => {
				console.log(error)
                alert("Cargo no se ha creado.")
			})
        },		
	},	
	// mounted(){		
		
	// },
    // created: function() {
    //     let datosDB = JSON.parse(localStorage.getItem('cargos'));
    //     if(datosDB === null){
    //         this.cargos = [];
    //     }
    //     else{
    //         this.cargos = datosDB;
    //     }
        
    // }
	
  }
</script>