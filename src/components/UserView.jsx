import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

import { fetchUsers } from '../store/features/userSlice'

export const UserView = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <div className = {classes.value}>
      <h1>List of Users</h1>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}