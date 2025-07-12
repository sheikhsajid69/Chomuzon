import React, { useState, useEffect } from 'react';
import './TodoPage.css';
import Header from './Header';
import Footer from './Footer'; // Import Footer component

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([{ id: Date.now(), text: newTodo, completed: false, isScratching: false }, ...todos]);
    setNewTodo('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed, isScratching: false } : todo
      )
    );
  };

  // Renamed from deleteTodo to reflect new behavior
  const markCompleteWithScratch = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isScratching: true } : todo
      )
    );
    // After animation, mark as completed and remove scratching state
    setTimeout(() => {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: true, isScratching: false } : todo
        )
      );
    }, 500); // Duration of scratch animation
  };

  const clearCompleted = () => {
    // Add a temporary class for removal animation
    setTodos(prevTodos => 
      prevTodos.map(todo => todo.completed ? { ...todo, isRemoving: true } : todo)
    );
    // Remove after animation
    setTimeout(() => {
      setTodos(prevTodos => prevTodos.filter((todo) => !todo.completed || !todo.isRemoving));
    }, 300); // Duration of fade-out animation
  };
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return !todo.isRemoving; // Don't show items being removed
  });

  return (
    <>
      <Header />
      <div className="todo-page-container">
        <div className="todo-app">
          <h1>My Modern To-Do List</h1>
          <form onSubmit={addTodo} className="todo-form">
            <input
              type="text"
              value={newTodo}
              onChange={handleInputChange}
              placeholder="Add a new task..."
              className="todo-input"
            />
            <button type="submit" className="add-button">
              <i className="fas fa-plus"></i> Add
            </button>
          </form>

          <div className="todo-filters">
            <button onClick={() => setFilter('all')} className={`filter-button ${filter === 'all' ? 'active' : ''}`}>All</button>
            <button onClick={() => setFilter('active')} className={`filter-button ${filter === 'active' ? 'active' : ''}`}>Active</button>
            <button onClick={() => setFilter('completed')} className={`filter-button ${filter === 'completed' ? 'active' : ''}`}>Completed</button>
          </div>

          <ul className="todo-list">
            {filteredTodos.length === 0 && filter === 'all' && <p className="empty-state">No tasks yet. Add one above!</p>}
            {filteredTodos.length === 0 && filter === 'active' && <p className="empty-state">No active tasks. Well done!</p>}
            {filteredTodos.length === 0 && filter === 'completed' && <p className="empty-state">No tasks completed yet.</p>}
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className={`
                  todo-item 
                  ${todo.completed ? 'completed' : ''}
                  ${todo.isScratching ? 'scratching' : ''}
                  ${todo.isRemoving ? 'removing' : ''}
                `}
              >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="todo-text">{todo.text}</span>
                <button 
                  onClick={() => markCompleteWithScratch(todo.id)} 
                  className="scratch-button"
                  aria-label="Mark as complete"
                >
                  <i className="fas fa-check-double"></i>
                </button>
              </li>
            ))}
          </ul>

          {todos.some(todo => todo.completed) && (
            <button onClick={clearCompleted} className="clear-completed-button">
              <i className="fas fa-trash-alt"></i> Clear Completed
            </button>
          )}
        </div>
      </div>
      <Footer /> {/* Add Footer component */}
    </>
  );
};

export default TodoPage;