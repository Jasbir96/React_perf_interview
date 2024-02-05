// import methods from slice {fetchDataStart, fetchDataSuccess, fetchDataFailure}

// async function fetchData() {
//     try {
//         setLoading(true);
//         const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
//         const user = await resp.json();
//         setUser(user);
//     } catch (err) {
//         setError(true);
//     } finally {
//         setLoading(false);
//     }
// }
// fetchData();
import UserSlice from "../redux/slice/UserSlice";
const action = UserSlice.actions;
export const fetchUserMiddleware = function (params) {
    return async (dispatch) => {
        try {
            dispatch(action
                .userLoading());
            const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const user = await resp.json();
            dispatch(action
                .useData(user));
        } catch (err) {
            dispatch(action
                .userError());
        }
    }
}

