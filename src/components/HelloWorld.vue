<template>
  <div class="hello">
    <div class="container">
    <div class="row">
      <div class="col-6">
       <input type="text" class="form-control" v-model="Iname" placeholder="name" >
      </div>
      <div class="col-2">
       <input type="text" class="form-control" v-model="Iage" placeholder="age" >
      </div>
      <div class="col-2">
       <input type="text" class="form-control" v-model="Iheight" placeholder="height in (m)" >
      </div>
      <div class="col-2">
       <button @click="addItem()" class="btn btn-primary">Submit</button>
      </div>
    </div><br><br><br><br><br>

    <div class="row">
      <div class="col-6">NAME</div>
      <div class="col-2">AGE</div>
      <div class="col-2">HEIGHT</div>
    </div><br>

    <div class="row" v-for="Info in Infos" :key="Info.id">
      <div class="col-6">{{ Info.name }}</div>
      <div class="col-2">{{ Info.age }}</div>
      <div class="col-2">{{ Info.height }}</div>
      <div class="col-2">
        <button @click="deleteInstance(Info.id)" class="btn btn-secondary">Delete</button>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import {db} from '../firebase/db'
export default {
  data() {
    return {
      Infos: [],
      Iname: '',
      Iage: '',
      Iheight: ''
    }
  },
  methods: {
    async addItem() {
      if (this.Iname && this.Iage && this.Iheight) {
        await db.collection("Infos").add({ name: this.Iname, age: this.Iage, height: this.Iheight });
        this.Iname = '';
        this.Iage = '';
        this.Iheight = '';
      }
    },
    deleteInstance(id) {
      db.collection("Infos").doc(id).delete();
    }
  },
  firestore: {
    Infos: db.collection("Infos")
  }
}
</script>

