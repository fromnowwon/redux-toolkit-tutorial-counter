import React, { useEffect } from 'react'
import { asyncUserFetch } from '../userSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.user.userList);
  const status = useSelector(state => state.user.status);

  useEffect(() => {
    dispatch(asyncUserFetch());
  }, [dispatch]);
  
  return (
    <div>
      <ul>
        {
          status === 'Loading' ? (
            <div>Loading...</div>
          ) : userList && userList.map(user => (
            <li key={user.id}>
              <div>{user.name}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UserList