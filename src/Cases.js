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
    },
    {
        id: '58013',
        firstName: 'John',
        lastName: 'Doe',
        category: 'Teaching File',
        initialDate: '2011-04-21 08:12',
        type: 'Resident Case',
        quantity: 1,
    },
    {
        id: '58014',
        firstName: 'Nicole',
        lastName: 'Siimsmith',
        category: 'awaiting previous imaging',
        initialDate: '2011-05-01 14:17',
        type: 'follow-up',
        quantity: 1,
    },
    {
        id: '58015',
        firstName: 'Samir',
        lastName: 'Patel',
        category: 'awaiting biopsy',
        initialDate: '2011-01-21 11:21',
        type: 'follow-up',
        quantity: 1,
    },
    {
        id: '58016',
        firstName: 'Ignacious',
        lastName: 'Smalltoe',
        category: 'awaiting excisional biopsy',
        initialDate: '2011-02-13 10:01',
        type: 'follow-up',
        quantity: 1,
    },
    {
        id: '58017',
        firstName: 'Andy',
        lastName: 'SIIM',
        category: 'Pending Biopsy',
        initialDate: '2011-06-23 14:20',
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
