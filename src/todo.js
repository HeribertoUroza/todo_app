import React from 'react'

const valProp = (prop, propName, propType) => {
    if (typeof prop !== propType) {
        throw new Error(`${propName} must be type: ${propType}`)
    }
}

const validateArray = (arr, arrName) => {
    if(!Array.isArray(arr)){
        throw new Error(`${arrName} must be an Array`)
    }
}

const validateDate = (dueDate) => {
    validateProp(dueDate, 'dueDate', 'number')

    if(dueDate <= Date.now()){
        throw new Error('dueDate needs to be in the future')
    }
}

const validateKeys = (object) => {
    const validKeys = {
        'name' : 'string',
        'isCompleted' : 'boolean',
        'dueDate' : 'number'
    }

    for (let key of Object.keys(object)) {
        if(validKeys[key]){
            continue;
        }
        throw new Error(`Key ${key} is not supported!`)
    }
}

const addToDo = (todos, name, isCompleted, dueDate) => {
    validateArray(todos)
    validateProp(name, 'name', 'string')
    validateProp(isCompleted, 'isCompleted', 'boolean')
    validateDate(dueDate)

    return todos.concat([{
        name,
        isCompleted,
        dueDate
    }])
}

const removeToDO = (todos, index) => {
    validateArray(todos)
    return todos.slice(0, index).concat(todos.slice(index+1));
}

const updateTodo = (todos, index, updatesObj) => {
    validateKeys(updatesObj)

    const todoUpdate = todos[index];

    const updatedTodo = Object.assign({}, todoUpdate, updatesObj)

    return todos.slice(0,index) // gets the first half
    .concat([updatedTodo]) // add the newTodo
    .concat(todos.slice(index+1)); // add the rest
}

export {
    addToDo,
    removeToDO,
    updateTodo
}