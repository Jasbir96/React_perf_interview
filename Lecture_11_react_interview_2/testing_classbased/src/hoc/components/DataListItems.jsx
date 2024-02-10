import { memo } from 'react';
import withDataFetching from './hoc/withDataFetching';
import DataComponent from './DataComponent';
const DataFetchingHOC = withDataFetching(
    DataComponent,
    "https://jsonplaceholder.typicode.com/todos"
);

const DataListItems = () => {
// 4 inputs
    return (
        <>
            <DataFetchingHOC />
        </>
    )
}

export default memo(DataListItems);