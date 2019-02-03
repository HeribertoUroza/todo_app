import React, { Component } from 'react';
import { Input } from 'reactstrap';

const onKeyDown = (e, addTodoCb) => {
    const { keyCode } = e;
    if (keyCode === 13) {
        addTodoCb(e.target.value, false, Date.now() + 1000 * 60 * 60 * 24);
        e.target.value = "";
    }
}

const TodoInput = props => {
    return <Input placeholder="Add Todo..."
        onKeyDown={e => onKeyDown(e, props.onTodoEntered)} />
}

export { TodoInput }