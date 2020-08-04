import { saludar, crearTodoHtml } from './js/componentes.js';
import './styles.css';
//gracias a la clase import de la carpeta classes no hace falta importar cada una de las clases al no poner archivo entiende que es el index.js
import { Todo, TodoList } from './classes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender es6');

// todoList.nuevoTodo(tarea);

// crearTodoHtml( tarea );

//todoList.todos.forEach( todo => crearTodoHtml(todo) );
todoList.todos.forEach( crearTodoHtml );