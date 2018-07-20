$(function () {

    Vue.component("view-customized", {
        template: "#view-customized-template",
        data: function () {
            return {
                id: ""
            };
        },
    });
    var app = new Vue({ el: "#app" });
})