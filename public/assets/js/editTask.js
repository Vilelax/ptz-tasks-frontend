const myurl = "https://localhost/ptz-tasks/app/task/";

let idSearch = new URLSearchParams(window.location.search);

if(idSearch.has('id')){

    let id = idSearch.get('id');

    $.getJSON(myurl.concat(id), {}, function (data) {

        console.log(data);

        $("#input-id").val(id);
        $("#input-title").val(data.data.title);
        $("#input-description").val(data.data.description);

    }).done(function () {

    }).fail(function (jqxhr,settings,ex) {

        console.log("Request failed");

    });
}