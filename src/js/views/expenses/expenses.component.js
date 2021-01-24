import React from 'react';


export class ExpenseComponent extends React.Component {
    render() {
        return (
            <div className="full-cover">
                <div className="module-left-panel">
                    <div className="module-x-panel-header border-bottom-light">
                        <button className="btn btn-primary float-right">Create New</button>
                    </div>
                    <div className="module-x-panel-body">
                    </div>
                </div>
                <div className="module-right-panel">
                    <div className="module-x-panel-header border-none">
                        <button className="btn btn-primary float-right margin-left-10">Add Expense</button>
                        <button className="btn btn-danger float-right margin-left-10">Delete</button>
                    </div>
                    <div className="module-x-panel-body">
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpenseComponent;