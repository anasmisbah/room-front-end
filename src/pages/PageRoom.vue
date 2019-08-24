<template>
<v-card
      class="mx-auto pa-5"
      :outlined="outlined"
      :elevation="elevation"
    >
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
    
  >
    <template v-slot:top>
      <v-toolbar flat color="gray">
        <v-toolbar-title>DATA ROOM</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <div class="flex-grow-1"></div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Add ROOM</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="12">
                    <v-select
                      :items="items"
                      label="Building"
                      v-model="editedItem.building_id"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.nama" label="Nama Ruangan"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.macble" label="Mac Bluetooth Device"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-file-input v-model="editedItem.file" display-size counter multiple label="Input Obj 3D"></v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon
            v-on="on"
            small
            class="mr-2"
            @click="editItem(item)"
          >edit
          </v-icon>
        </template>
        <span>Edit Room</span>
      </v-tooltip>
      
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon
          small
          @click="deleteItem(item)"
          v-on="on"
        >
          delete
        </v-icon>
        </template>
        <span>Delete Room</span>
      </v-tooltip>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</v-card>
</template>

<script>
export default {
    data: () => ({
      media: true,
      actions: true,
      outlined: true,
      elevation: 50,
      dialog :false,
      headers: [
        {
          text: 'Nama Ruangan',
          align: 'left',
          sortable: true,
          value: 'nama',
        },
        { text: 'Mac Bluethoot', value: 'macble' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nama: '',
        macble: '',
        file: null,
        building_id:null
      },
      defaultItem: {
        nama: '',
        macble: '',
        file: null,
        building_id:null
      },
      items: ['Foo', 'Bar', 1, 'Buzz'],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Add Building' : 'Edit Building'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            nama: 'Dilo',
            macble: 159,
            building_id:1
          },
          {
            nama: 'Telkom',
            macble: 237,
            building_id:1
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        this.$swal(
            {
                title: 'Are you sure you want to delete this item??',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.value) {
                    this.desserts.splice(index, 1)
                    this.$swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                }
                }
        )
        // confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>

</style>