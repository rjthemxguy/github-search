import React, { Component } from 'react'

export class Users extends Component {

state = {
    users: [
        {
            id: 1,
            login: "RJ",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo"
        },
        {
            id: 2,
            login: "The Fern",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo"
        },
        {
            id: 3,
            login: "The Boo",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo"
        }

    ]
}

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <div>{user.login}</div>

                ))}
            </div>
        )
    }
}

export default Users