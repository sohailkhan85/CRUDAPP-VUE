<template>
  <div class="container mt-5">
      <div class="card">
          <div class="card-header">
              <h3>Add Student</h3>
          </div>
          <div class="card-body">
              <div class="mb-3">
                  <label for="">Name</label>
                  <input type="text"  v-model="name" class="form-control" :class="{'p-invalid':$v.$error}">
                  <span v-if="$v.$error" style="background-color:aquamarine;">
                     Please Enter your Name.
                  </span> 
              </div>
              <div class="mb-3">
                  <label for="">Email</label>
                  <input type="text" v-model="email" class="form-control" :class="{'p-invalid':$v.$error}">
                  <span v-if="$v.$error" style="background-color:aquamarine;">
                    Please Enter your Email.
                  </span>
              </div>
              <div class="mb-3">
                  <label for="">City</label>
                  <input type="text" v-model="city" class="form-control" :class="{'p-invalid':$v.$error}">
                   <span v-if="$v.$error" style="background-color:aquamarine;">
                    Please Enter your City.
                  </span> 
                      
              </div>
              <div class="mb-3">
                  <button type="button" @click="submitForm" class="btn btn-primary">
                    Save
                  </button>
                 
              </div>
          </div>
      </div>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

const name = ref('')
const rules =computed(() => (
  {
    name: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
     
    },
  }
));

const $v = useVuelidate(rules, { name });
console.log($v);
const submitForm = () => {
  const result = $v.value.$validate();
  result.then((res) => {
    if(res) {
      alert('Form submitted.');
    }
  }).catch((err) => {
    console.log(err);
  })

};
</script>

