import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const TodoList = props => {
    return <ListGroup>
        {props.todos.map((todo, index) => {
            return <ListGroupItem key={index}>
                {todo.name}
            </ListGroupItem>
        })}
    </ListGroup>
}

export { TodoList }