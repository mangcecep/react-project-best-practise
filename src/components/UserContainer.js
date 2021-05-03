import React from 'react'
import { connect } from "react-redux"
import { fetchUser, searchUser } from "../redux"

const UserContainer = ({ userData, fetchUsers, searchUsers }) => {

    React.useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);


    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div className="apps">
            <h2>User list</h2>
            <input type="text" onChange={(e) => searchUsers(e.target.value)} />
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.users.map((u, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{u.login}</td>
                                <td><img src={u.avatar_url} alt={u.avatar_url} className="avatar" /></td>
                                <td>{u.type}</td>
                            </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUser()),
        searchUsers: (data) => dispatch(searchUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
