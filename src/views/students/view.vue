<template>

      <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Students List
                    <RouterLink to="/students/create" class="btn btn-primary float-end">
                        Add Student
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="fw-bolder">ID</th>
                            <th class="fw-bolder">Name</th>
                            <th class="fw-bolder">Email</th>
                            <th class="fw-bolder">City</th>
                            <th class="fw-bolder">Actions</th>
                        </tr>
                    </thead>
                        <tbody v-if="this.students.length > 0 ">
                            <tr v-for="(student,index) in this.students" :key="index">
                                <td>{{ student.id }}</td>
                                <td>{{ student.name }}</td>
                                <td>{{ student.email }}</td>
                                <td>{{ student.city }}</td>
                                <td>
                                    <RouterLink :to="{ path: '/students/'+student.id+'/edit' }" class="btn btn-success mx-2">
                                        Edit
                                    </RouterLink>
                                    <button type="button" @click="deleteStudent(student.id)" class="btn btn-danger mx-2">Delete</button>
                                </td>
                                    
                                
                            </tr>
                        </tbody>
                        <tbody v-else="">
                            <tr>
                                <td colspan="6">Loading....</td>
                            </tr>
                        </tbody>
                    
                </table>
            </div>
        </div>
      </div>
        

  
</template>

<script>

    import axios from 'axios'
    import { RouterLink } from 'vue-router';

    export default {
        name: 'students',
        data() {
            return {

                students: []
            };
        },
        created() {
            this.getStudents();
        },
        mounted() {
            //console.log('I am here')
        },
        methods: {
            getStudents() {
                var page = "http://localhost:8000/api/students";
                axios.get(page)
                    .then(
                        res => {
                            this.students = res.data.students;
                        }
                );
            },
            deleteStudent(studentId){
                if(confirm('Aru you sure you want to delete this record?'))
                {
                    //console.log(studentId);
                    axios.delete(`http://127.0.0.1:8000/api/students/${studentId}/delete`)
                    .then(
                        res => {
                            alert(res.data.message);
                            this.getStudents();
                        }
                    );
                }
            }

        },
        components: { RouterLink }
}

</script>