<template>
    <div>
        <div class="form-group">
            <label for="fio">ФИО</label>
            <input class="form-control" id="fio">
        </div>
        <label for="exampleInputEmail1">Электронная почта</label>
        <input type="email" class="form-control" id="exampleInputEmail1">
        <p>Пол</p>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Мужской</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">Женский</label>
        </div>
        <br>
        <button type="submit" class="btn btn-primary" @click="sendForm">Отправить</button>
    </div>
</template>

<script>
    export default {
        name: "Form",
        methods: {
            sendForm: function () {
                let name = document.getElementById('fio').value;
                let email = document.getElementById('exampleInputEmail1').value;
                let isFemale = !document.getElementById('inlineRadio1').value;
                let q = {
                    "fio": name,
                    "email": email,
                    "is_female": isFemale
                };
                this.$http.post('http://127.0.0.1:8000/form/', q, {emulateJSON:true}).then(alert("Успех"));
            }
        }
    }
</script>

<style scoped>

</style>