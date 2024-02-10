import React, { useState, useEffect } from 'react'

function withDataFetching(WrappedComponent, dataSource) {
    return function DataFetchingHOC(props) {

        const [data, setData] = useState([]);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        useEffect(() => {
            setIsLoading(true);
            try {
                fetch(dataSource)
                    .then(res => res.json())
                    .then((data) => {
                        console.log("data", data);
                        setData(data);
                    })
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }, []);

        return (
            <WrappedComponent
                data={data}
                error={error}
                loading={isLoading}
                {...props}
            >
            </WrappedComponent>
        )
    }

}

export default withDataFetching