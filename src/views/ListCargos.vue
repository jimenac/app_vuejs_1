<template>
  <client-only>
    <v-data-table :headers="headers" :items="list" sort-by="descripcion" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Cargos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">Nuevo</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.codigo_cargo" label="Código Cargo"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="save()">Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </client-only>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers(
  "cargos"
);

export default {
  name: "Cargos",
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Código Cargo",
        align: "start",
        sortable: false,
        value: "codigo_cargo",
      },
      { text: "Nombre", value: "nombre", sortable: false },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      codigo_cargo: "",
      nombre: "",
    },
    defaultItem: {
      nombre: "",
      codigo_cargo: "",
    },
  }),

  
  computed: {
    ...mapState(["list"]),

    formTitle() {
      return this.editedIndex === -1 ? "Nuevo" : "Editar";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  methods: {
    ...mapActions(["load", "create", "update", "delete"]),

    editItem(item) {
      this.editedIndex = this.list.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      confirm("¿Estás seguro que querés eliminar este objeto?") &&
        this.delete(item);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.update(this.editedItem);
      } else {
        this.create(this.editedItem);
      }
      this.close();
    },
  },
  mounted () {
      this.load();     
  } 
};
</script>