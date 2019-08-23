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
        <v-toolbar-title>DATA BUILDING</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <div class="flex-grow-1"></div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Add Building</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.name" label="Nama Bangunan"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-textarea
                        v-model="editItem.file"
                        :row-height="24"
                        :rows="1"
                        label="Alamat Bangunan"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-file-input display-size counter multiple label="Input Obj 3D"></v-file-input>
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
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
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
          text: 'Nama Bangunan',
          align: 'left',
          sortable: true,
          value: 'nama',
        },
        { text: 'alamat', value: 'alamat' },
        { text: 'QR Code', value: 'qrCode' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nama: '',
        alamat: '',
        file: '',
      },
      defaultItem: {
        nama: '',
        alamat: '',
        file: '',
      },
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
            alamat: 159,
          },
          {
            nama: 'Telkom',
            alamat: 237,
            
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