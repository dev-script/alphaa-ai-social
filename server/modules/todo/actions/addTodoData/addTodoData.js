const { todos } = require(__basedir + "/db/controllers");
const { throwBadRequestError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

/**
 * Method to add new todo
 * @param {object} todoObj Todo object.
 * */
const addTodoData = async todoObj => {
    const todo = await todos.getTodo({ title: todoObj.title });
    if (todo) {
        throwBadRequestError(messages.TODO_ALREADY_EXISTS);
    }
    const result = await todos.createTodo(todoObj);
    return {
        todo: result,
    };
};

module.exports = {
    addTodoData
};