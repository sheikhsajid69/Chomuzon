import React from 'react';

const Table = () => {
    const data = [
        { id: 1, name: 'John Doe', role: 'Developer', department: 'Engineering' },
        { id: 2, name: 'Jane Smith', role: 'Designer', department: 'UI/UX' },
        { id: 3, name: 'Mike Johnson', role: 'Manager', department: 'Operations' },
        { id: 4, name: 'Sarah Williams', role: 'Analyst', department: 'Data Science' }
    ];

    return (
        <div className="table-container">
            <h2>Employee Directory</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.role}</td>
                            <td>{employee.department}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Total Employees: {data.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Table;