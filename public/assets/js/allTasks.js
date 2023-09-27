$.getJSON('https://localhost/ptz-tasks/app', {}, function(data, textStatus, jqXHR){
    if(data.success){

        const tasks = Object.entries(data.data);

        tasks.forEach(task => {

            const taskCard = $("<div class='card-container'></div>");

            taskCard.append(
                `
                <a class="card-link" href="http://localhost:3000/pages/edit-task.html?id=${task[0]}">
                    <div class="card">
                        <p class="task-title">${task[1].title}</p>
                        <p class="task-description">${task[1].description}</p>
                        <hr>
                        <a class="task-creation-button" href="https://localhost/ptz-tasks/app/task/complete/${task[0]}">
                            Concluir
                        </a>
                   </div>
                </a>
                `
            );

            $("#tasks-container").append(taskCard);
        });

    }
}).done(function () {

}).fail(function (jqxhr,settings,ex) {

        console.log("Request failed");

});

