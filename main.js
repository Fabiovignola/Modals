var app = new Vue({
    el: '#container',
    data: {
        personas: [],
        nombres: "",
        cont: "",
        contacto: [],


    },
    created: function () {
        this.callAjax();

    },
    methods: {
        callAjax: function () {
            fetch("https://api.myjson.com/bins/y34ni", {
                method: "GET",
            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            }).then(function (json) {
                app.data = json;
                console.log(app.data);
                app.personas = json.people;
                console.log(app.personas);


            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });
        },
        callButton: function () {
            var ev = event.target.getAttribute("data-id");
            console.log(ev);
            this.cont = this.personas[ev];
            console.log(this.cont)
            this.contacto = this.personas[ev].contact_info;
            console.log(this.contacto);
            if (this.contacto.email == "null") {
                document.getElementById("butt").innerHTML = "no tiene email"
            } else if (this.contacto.email != "null")
                document.getElementById("butt").innerHTML = this.contacto.email
        },
    },
});
