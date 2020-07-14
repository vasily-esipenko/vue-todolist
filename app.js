var app = new Vue({
    el: "#app",
    data: {
        taskItem: "",
        tasks: [
            {id: 1, task: "Wake up", completed: false},
            {id: 2, task: "Have a breakfast", completed: false},
            {id: 3, task: "Write some code", completed: false}
        ]
    },
    methods: {
        add: function() {
            const newTask = {id: 1, task: this.taskItem, completed: false}
            this.tasks.push(newTask);
        }
    }
});
