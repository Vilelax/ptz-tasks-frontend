$.getJSON('https://localhost/ptz-tasks/app', {}, function(data, textStatus, jqXHR){
    if(data.success){

        const tasks = Object.entries(data.data);

        tasks.forEach(task => {
            $("#tasks-container").append(
                `
                <a href="http://localhost:3000/pages/edit-task.html?id=${task[0]}">
                    <div>
                        <p>Title: ${task[1].title}</p>
                        <p> Description: ${task[1].description}</p>
                        <a href="https://localhost/ptz-tasks/app/task/complete/${task[0]}">
                            <p>Concluir</p>
                        </a>
                   </div>
                </a>
                `
            );
        });

    }
}).done(function () {

}).fail(function (jqxhr,settings,ex) {

        console.log("Request failed");

});

