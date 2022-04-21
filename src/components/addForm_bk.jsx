import React, { PureComponent } from 'react';

class Addform extends PureComponent {
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
    }
    render() {
        console.log('addform.jsx');
        return (
            <form onSubmit={this.onSubmit}>
                <div className='add-form'>
                    <input ref={this.inputRef} className='add-text' type="text" placeholder='Enter Your Habit' />
                    <button className='add-button' type='submit'>Add</button>
                </div>
            </form>
        );
    }
}

export default Addform;