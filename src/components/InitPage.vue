<template>
    <div>
        <div class="row">
            <div class="col-lg-4 col-lg-offset-4">
                <form-group>
                    <Label>Enter your email id</Label>
                    <input type="email" placeholder="your email" v-model="email" class="form-control">
                    <br><button class="btn btn-primary" @click="getData">Proceed to Login page</button>
                </form-group>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-lg-4 col-lg-offset-4">
                <form-group>
                    <Label>Enter your email id</Label>
                    <input type="email" placeholder="your email" v-model="email" class="form-control">
                    <Label>Enter your enrollment no</Label>
                    <input type="text" placeholder="your enroll" v-model="enroll" class="form-control">
                    <br>
                    <button class="btn btn-primary" @click="postData">post data</button>
                </form-group>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                enroll: ''
            }
        },
        methods: {
            getData() {
                this.$http.get('https://online-voting-a9789.firebaseio.com/data.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        let record = false;
                        const resultArray = [];
                        for (let key in data) {
                            if (this.email == data[key].email) {
                                record = true;
                                this.$store.state.email = this.email;
                                this.$store.state.enroll = data[key].enroll;
                            }
                        }
                        if (record) {
                            this.$router.push('/success');
                        } else {
                            this.$router.push('/error');
                        }
                    });
    
                this.$http.get('https://online-voting-a9789.firebaseio.com/student.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        let record = false;
                        const resultArray = [];
                        for (let key in data) {
                            if (this.email == data[key].email) {
                                record = true;
                            }
                        }
                        if (record) {
                            this.$router.push('/');
                        }
                    });
            },
            postData() {
                const voti = {
                    email: this.email,
                    enroll: this.enroll
                };

                this.$http.post('https://online-voting-a9789.firebaseio.com/data.json', voti)
                .then(response => {
                    console.log(response);
                })
                .then(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    .row {
        margin-top: 40px
    }
</style>
