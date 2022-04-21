import React, { Component } from 'react';
import Addform from './addForm';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };
    handleAdd = (name) => {
        this.props.onAdd(name);
    };
    render() {
        console.log('habits.jsx');
        return (
            <>
            <Addform onAdd={this.handleAdd} />
            <ul>
                {this.props.habits.map( habit => (
                    <Habit habit={habit} key={habit.id} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    />
                ))}
            </ul>
            <button className='reset-button' onClick={this.props.onReset} >Reset All</button>
            </>
        );
    }
}

export default Habits;