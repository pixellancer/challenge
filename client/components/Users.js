import React from 'react'
import { List } from './List'

export const Users = () => {
    return (
        <div className='userInfo'>
            <h1 className='userInfo__header'>All Users</h1>
            <h4 className='userInfo__subHeader'>User and their age</h4>
            <List></List>
        </div>
    )
}
