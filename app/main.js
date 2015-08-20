import React from 'react'
import ReactDOM from 'react-dom'
import googleAuth, { signIn, signOut } from 'google-auth'

class Catkin extends React.Component {

    componentDidMount() {
        gapi.load('auth2', googleAuth);
    }

    render() {
        return <div>
            <button onClick={signIn}>sign in</button>
            <button onClick={signOut}>sign out</button>
        </div>
    }

}

ReactDOM.render(<Catkin />, document.querySelector('.app-container'))
