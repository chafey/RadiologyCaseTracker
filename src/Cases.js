import React from 'react';

import Table from 'react-bootstrap/Table';

const Cases = () => {
    const headers = {
        id: 'ID',
        firstName: 'First Name',
        lastName: 'Last Name',
        category: 'Category',
        initialDate: 'Initial Activity',
        type: 'Type',
        quantity: 'How Many'
    };

    const columns = [
        'id',
        'firstName',
        'lastName',
        'category',
        'initialDate',
        'type',
        'quantity',
    ];

    const data = [{
        id: '58011',
        firstName: 'Abby',
        lastName: 'Adams',
        category: 'awaiting pathology report',
        initialDate: '2011-04-21 09:12',
        type: 'follow-up',
        quantity: 1,
    },
    {
        id: '58012',
        firstName: 'Barbara',
        lastName: 'Bradley',
        category: 'awaiting post operative report',
        initialDate: '2011-04-21 08:12',
        type: 'follow-up',
        quantity: 1,
    }]
    return (
        <>
            <h1>Teaching cases</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {columns.map(c => (
                            <th key={c}>
                                {headers[c]}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => (
                        <tr key={d.id}>
                            {columns.map(c => (
                                <td key={c}>
                                    {d[c]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table >
        </>
    )
};

export default Cases;
