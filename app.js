var app = new Vue({
    el: "#app",
    data: {
        taskItem: "",
        tasks: [
            {id: 1, task: "Wake up", completed: false},
            {id: 2, task: "Have a breakfast", completed: false},
            {id: 3, task: "Write some code", completed: false}
        ],
        zeroTasks: "You don't have any tasks =(\n Try to add something!"
    },
    methods: {
        add: function() {
            const newTask = {id: this.tasks.length+1, task: this.taskItem, completed: false}
            this.tasks.push(newTask);
        },
        complete: function(id) {
            this.tasks[id].completed = !this.tasks[id].completed;
            console.log(this.tasks[id].completed);
        },
        delete: function(id) {
            this.tasks.splice(id, 1);
            console.log(this.tasks.task);
        }
    }
});
