import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserMiddleware } from '../../middleWare/userMiddleWare';
function UserRedux() {
    const { user, loading, error } = useSelector((store) => {
        return store.User;
    })
    
    const dispatch = useDispatch();
    useEffect(function () {
        dispatch(fetchUserMiddleware());
        console.log("i ran")
    }, [])

    const heading = <h2>User Example</h2>;


    if (loading) {
        return <> {heading}
            <h3>...Loading</h3>
        </>
    }
    if (error) {
        return <> {heading}
            <h3>Error occurred</h3>
        </>
    }
    return (
        <>
            {heading}
            <h4>Name: {user.name}</h4>
            <h4>Phone: {user.phone}</h4>
        </>
    )
}

export default UserRedux