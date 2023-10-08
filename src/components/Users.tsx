import React from 'react';
import { UsersProps } from '../api';

const Users: React.FC<UsersProps> = ({usersProp}) => {
    return (
        <ul>
            {   
                usersProp.map((user) => {
                        return  <li
                                    key={user.id}
                                >
                                    {user.name}, {user.age}
                                </li>
                    })

            }
        </ul>
    );
};

export default Users;