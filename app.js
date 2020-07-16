var app = new Vue({
    el: "#app",
    data: {
        taskItem: "",
        tasks: [
            {task: "Wake up", completed: false},
            {task: "Have a breakfast", completed: false},
            {task: "Write some code", completed: false}
        ],
        zeroTasksOne: "You don't have any tasks now😌",
        zeroTasksTwo: "Try to add one☝️"
    },
    methods: {
        add() {
            if (this.taskItem.length > 0) {
                const newTask = {task: this.taskItem, completed: false}
                this.tasks.push(newTask);
                this.taskItem = "";
            } else {
                alert("You didn't add any tasks");
            }

        },
        complete(id) {
            this.tasks[id].completed = !this.tasks[id].completed;
            console.log(this.tasks[id].completed);
        },
        remove(id) {
            this.tasks.splice(id, 1);
            console.log("deleted");
        }
    }
});
