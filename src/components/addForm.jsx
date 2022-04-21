import React, { memo } from 'react';

const AddForm = memo((props) => {
    const inputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='add-form'>
                <input ref={inputRef} className='add-text' type="text" placeholder='Enter Your Habit' />
                <button className='add-button' type='submit'>Add</button>
            </div>
        </form>
    );
});

export default AddForm;
