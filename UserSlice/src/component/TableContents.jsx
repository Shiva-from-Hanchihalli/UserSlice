import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from './UserSlice';
import { colors } from '@mui/material';

const TableContents = ({ users, setUsers }) => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.User.users);

    const deleteuser = (row) => {
        dispatch(removeUser(row));
        setUsers([row, ...users]);
    };

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', overflow: 'hidden' }}>
                <thead>
                    <tr>
                        <th style={{ minWidth: 100, border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>ID</th>
                        <th style={{ minWidth: 100, border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Username</th>
                        <th style={{ minWidth: 100, border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
                        <th style={{ minWidth: 100, border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Email ID</th>
                        <th style={{ minWidth: 100, border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{row.id}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{row.username}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{row.name}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{row.email}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                                <button   style={{backgroundColor:'red'}}onClick={() => deleteuser(row)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableContents;
