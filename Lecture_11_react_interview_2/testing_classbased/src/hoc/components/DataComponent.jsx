import React from 'react'

function DataComponent({loading,error,data}) {
    if (loading) {
        return (
            <h2>Loading</h2>

        )
    }
    if (error) {
        <>
            <h2>Loading</h2>
        </>
    }

    return (

        <>
            <h2> Data from API</h2>
            <ul>
                {
                    data.map((item, index) => {
                        return (
                            <li style={{ textAlign: 'left', paddingLeft: '10px' }} key={`item-${index + 1}`}>
                                {item.title}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default DataComponent;