<template>
    <div>
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
                <div class="panel panel-info">
    
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <h1>Online Voting</h1>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
    
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <button @click="logOut">Logout</button>
                    </div>
                    <div class="panel panel-body">
                        Your Enrollment Number: {{ enroll }} <br>
                        Your Email-id: {{ email }}
                    </div>
                </div>
            </div>
        </div>
    
        <form-group>
    
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
                    <label for="candidate">Select Candidate (CSE)</label>
                    <select id="candidate" class="form-control" v-model="candidate_cse" required>
                        <option value="Saurabh Sunil">Saurabh Sunil</option>
                        <option value="Vipul Kumar Yadav">Vipul Kumar Yadav</option>
                        <option value="Bishwavijay">Bishwavijay</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
                    <label for="candidate">Select Candidate (ECE)</label>
                    <select id="candidate" class="form-control" v-model="candidate_ece" required>
                        <option value="Aditya Gaurav">Aditya Gaurav</option>
                        <option value="Sunil Kumar">Sunil Kumar</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
                    <label for="candidate">Select Candidate (EEE)</label>
                    <select id="candidate" class="form-control" v-model="candidate_eee" required>
                        <option value="Shekhar Ranjan Gautam">Shekhar Ranjan Gautam</option>
                        <option value="Prince Kumar">Prince Kumar</option>
                        <option value="Shailesh Singh">Shailesh Singh</option>
                    </select>
                </div>
            </div>
    
    
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
                    <br>
                    <button class="btn btn-success" @click="submit">Submit Vote</button>
                </div>
            </div>
    
        </form-group>
    
        <br>
    
    
        <div class="row">
            <div class="col-lg-6 col-lg-offset-3 col-lg-8 col-lg-offset-2 col-sm-8 col-sm-2col-xs-12 ">
                <button class="btn btn-success" @click="fetchData">Fetch all voting data</button>
                <!-- <ul class="list-group">
                    <li class="list-group-list" v-for="u in users" :key="u.email">
                        {{ u.email}} = {{ u.candidate1}} : {{ u.candidate2}}: {{ u.candidate3}}
                    </li>
                </ul> -->
                <table class="table">
                    <thead>
                        <tr>
                            <th>VOTER</th>
                            <th>CSE Candidate</th>
                            <th>ECE Candidate</th>
                            <th>EEE Candidate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="u in users" :key="u.email">
                            <td>{{ u.email }}</td>
                            <td>{{ u.candidate1 }}</td>
                            <td>{{ u.candidate2 }}</td>
                            <td>{{ u.candidate3 }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    </div>
</template>

<script>
export default {
  computed: {
    enroll() {
      return this.$store.state.enroll;
    },
    email() {
      return this.$store.state.email;
    }
  },
  data() {
    return {
      statement: "",
      candidate_cse: "",
      candidate_ece: "",
      candidate_eee: "",
      users: []
    };
  },
  methods: {
    submit() {
      var candidate1;
      var candidate2;
      var candidate3;

      const voter = {
        email: this.$store.state.email,
        enroll: this.$store.state.enroll,
        candidate1: this.candidate_cse,
        candidate2: this.candidate_ece,
        candidate3: this.candidate_eee
      };

      this.$http
        .post("https://online-voting-a9789.firebaseio.com/student.json", voter)
        .then(response => {
          console.log(response);
        })
        .then(error => {
          console.log(error);
        });

      this.$router.push("/congrates");
    },
    fetchData() {
      this.$http
        .get("https://online-voting-a9789.firebaseio.com/student.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    },
    logOut() {
      this.$router.push("/");
    }
  }
};
</script>