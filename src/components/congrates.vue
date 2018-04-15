<template>
    <div>
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
                <div class="panel panel-default">
                    <div class="panel panel-title">
                        <h2>Hurrey! You have successfully submitted your response</h2>
                    </div>
                    <button class="btn btn-primary" @click="resubmmit">Resubmmit</button>
                    <br><br>
                    <button class="btn btn-default" @click="home">Go out</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            resubmmit() {
                this.$router.push('/success');
            },
            home() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .row .panel {
        margin: 50px;
        padding: 50px;
        border-radius: 10px;
        background-color: rgb(42, 160, 42);
        color: white;
    }
</style>
