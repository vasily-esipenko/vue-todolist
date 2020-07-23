var app = new Vue({
    el: "#app",
    data: {
        taskItem: "",
        tasks: this.tasks = JSON.parse(localStorage.getItem("items")) || [],
        zeroTasksOne: "You don't have any tasks now😌",
        zeroTasksTwo: "Try to add one☝️"
    },
    methods: {
        add() {
            if (this.taskItem.length > 0) {
                const newTask = {task: this.taskItem, completed: false}
                this.tasks.push(newTask);
                localStorage.setItem("items", JSON.stringify(this.tasks));
                this.taskItem = "";
            } else {
                alert("You didn't add any tasks");
            }

        },
        complete(id) {
            this.tasks[id].completed = !this.tasks[id].completed;
            localStorage.setItem("items", JSON.stringify(this.tasks));
        },
        remove(id) {
            this.tasks.splice(id, 1);
            localStorage.setItem("items", JSON.stringify(this.tasks))
        }
    }
});
