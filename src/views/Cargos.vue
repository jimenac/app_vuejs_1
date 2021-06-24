<template>
<v-container pading>
	<v-layout>
		<v-flex >
		<v-card class="pa-5">
		<v-toolbar-title>Cargos</v-toolbar-title>	
		<!-- <b-button size="sm" :to="{name: 'entidad'}" variant="Primary"></b-button> -->
		<br>
		<br>
        <!-- <template v-slot:activator="{ on, attrs }"> -->
            <v-btn color="primary"  :to="{name: 'NewCargo'}">Nuevo Cargorrr</v-btn>
        <!-- </template> -->
		<br>
		<br>
		<v-data-table 
			:headers="headers"
			:items="cargos"
			:items-per-page="5"
			class="elevation-1"
			>
            <template v-slot:item.actions="{ item }"> 
                <v-btn small class="mr-2" :to="{name:'EditCargo', params: {cargoId: item.id}}">Editartt</v-btn>   
                <!-- <v-btn small class="mr-2" :to="{name:'EditCargo' }">mdi-pencil</v-btn>  -->
                <!-- <v-icon small @click="deleteItem(item)">mdi-delete</v-icon> -->
            </template> 
		</v-data-table>	
		</v-card>
		</v-flex>
    </v-layout>
          <v-btn small class="mr-2" :to="{name:'EditCargo', params: {cargoId: 8}}">Editartt</v-btn>   

</v-container>  
</template>

<script>
	
  export default {
    data () {
      return {
        headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      { text: "Codigo Cargo", value: "codigo_cargo", sortable: false },
      { text: "Id ", value: "id", sortable: false },
      { text: "Acciones", value: "actions", sortable: false },
    ],		
        cargos: [],
        cargoId: this.$route.params.cargoId
    }
    },
	methods:{
		getCargos () {
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
	mounted(){
		
		this.getCargos()
	}
	
  }
</script>