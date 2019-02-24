<template>
    <div>
        <div class="pokemon-theme" id="main-form">
            <div class="form-group">
                <label for="fio">ФИО</label>
                <input class="form-control" id="fio">
            </div>
            <label for="exampleInputEmail1">Электронная почта</label>
            <input type="email" class="form-control" id="exampleInputEmail1">
            <p class="gender">Пол</p>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male">
                <label class="form-check-label" for="exampleRadios1">
                    Мужской
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female">
                <label class="form-check-label" for="exampleRadios2">
                    Женский
                </label>
            </div>
            <button type="submit" class="btn btn-warning" @click="sendForm">Отправить</button>
        </div>
        <div class="pokemon-theme" id="wait" style="display: none">
            Подождите...
        </div>
    </div>
</template>

<script>

    export default {
        name: "Form",
        methods: {
            sendForm: function () {
                let name = document.getElementById('fio').value;
                let email = document.getElementById('exampleInputEmail1').value;
                let isFemale = document.getElementById('exampleRadios2').checked;
                let q = {
                    "fio": name,
                    "email": email,
                    "is_female": isFemale
                };
                let mainForm = document.getElementById('main-form');
                let wait = document.getElementById('wait');
                mainForm.style.display = 'none';
                wait.style.display = '';
                this.$http.post('http://127.0.0.1:8000/form/', q, {emulateJSON: true})
                    .then(function () {
                        this.$router.push('/');
                    })
                    .catch(function (error) {
                        mainForm.style.display = '';
                        wait.style.display = 'none';
                        alert(JSON.stringify(error.data));
                    });
            }
        }
    }
</script>

<style scoped>
    .form-control {
        border-color: #506860;
    }

    .gender {
        top: 10px;
        position: relative;
    }

    .btn {
        margin-top: 15px;
    }
</style>