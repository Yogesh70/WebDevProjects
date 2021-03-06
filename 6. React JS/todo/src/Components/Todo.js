import React, { Component } from 'react';

class Todo extends React.Component {

    constructor() {

        super();
        this.state = {
            tasks: [{ id: 1, txt: 'First Task' }, { id: 2, txt: 'Second Task' }, { id: 3, txt: 'Third Task' }],
            currTask: ""
        }
    }

    handleChange = (e) => {
        let val = e.target.value;
        console.log(val);

        this.setState({
            currTask: val
        })
    }

    handleSubmit = () => {
        // (Wrong)
        // this.state.tasks.push({ id: this.state.tasks.length + 1, txt: this.state.currTask });
        // this.state.currTask = '';

        if (this.state.currTask != '') {
            // In react we have to make changes immutably
            let nTaskArr = [...this.state.tasks, { id: this.state.tasks.length + 1, txt: this.state.currTask }];
            this.setState({
                tasks: nTaskArr,
                currTask: ''
            })
        }
    }

    handleDelete = (id) => {
        let newTaskArr = this.state.tasks.filter((taskObj) => {
            return taskObj.id != id;
        })

        this.setState({
            tasks: newTaskArr
        })
    }

    render() {

        return (
            // JSX
            <React.Fragment>
                <div className='input-container'>
                    <input value={this.state.currTask} onChange={this.handleChange} type='text' placeholder="Enter The Task"></input>
                    <button onClick={this.handleSubmit}>Add</button>
                </div>

                <div className='class-list'>
                    <ul>
                        {
                            this.state.tasks.map((taskObj) => {
                                return (
                                    <li key={taskObj.id}>
                                        <h1>{taskObj.txt} <button onClick={() => this.handleDelete(taskObj.id)} >X</button> </h1>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </React.Fragment >
        );
    }
}

export default Todo;