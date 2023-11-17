// Each activity will be represented by an object with two properties:
// - text: a string indicating the text of the ToDo
// - done: a boolean (true/false) indicating whether the ToDo has been done or not
// MILESTONE 1
// Print an item for each ToDo within an HTML list, displaying the text.
// If the "done" property is equal to true, display the ToDo text with a strikethrough.
// MILESTONE 2
// Display an "X" next to each item: by clicking on it, the ToDo is removed from the list.
// MILESTONE 3
// Prepare a text input and an "add" button. By clicking the button, the text you type is read and used to create a new ToDo object, which is then added to the ToDo list.
// BONUSES:
// In addition to clicking on the button, also intercept the ENTER key to add the ToDo to the list (see documentation)
// By clicking on the text of the item, invert the value of the done property of the corresponding todo (if done was equal to false, set true and vice versa)


const { createApp } = Vue;

const vueApp = {
    data() {
        return {
            // Each activity will be represented by an object with two properties:
            // - text: a string indicating the text of the ToDo
            // - done: a boolean (true/false) indicating whether the ToDo has been done or not
            toDoList: [

                {
                    text: "Wake up at 06:00 AM",
                    done: false,

                },
                {
                    text: "Go to the Gym",
                    done: true,
                },
                {
                    text: "Take the lessons",
                    done: true,
                },
                {
                    text: "Complete the assignment",
                    done: false,
                },
                {
                    text: "Meeting with friends",
                    done: true,
                },

            ],

            listItem: 0,
            newTask:"",
            errorMsg: false,
            

        }

    },

    methods: { // methods with functions
        removeItem(item) {
            const index = this.toDoList.indexOf(item);
            if (index) {  // if index is found in the arry (ture)
              this.toDoList.splice(index, 1);
            }
          },

        addNewTask(){
            if(this.newTask){
                let addToDo = {
                    text: this.newTask ,
                    done: false ,
                }
                this.toDoList.push(addToDo);

                this.errorMsg = false;
            }
            else{
                this.errorMsg = true
            }
            
            


        },



        mounted() {

        }

    }
}
createApp(vueApp).mount("#app");