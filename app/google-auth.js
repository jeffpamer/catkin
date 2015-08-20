/**
* Initializes Signin v2 and sets up listeners.
*/
export default () => {
    const auth2 = gapi.auth2.init({
        client_id: '712872741636-rv769phvm5usu8h5pddsfjeqol5t7rk6.apps.googleusercontent.com'
    })

    auth2.isSignedIn.listen(signinChanged)
    auth2.currentUser.listen(userChanged)
};

/**
* Listener method for sign-out live value.
*
* @param {boolean} val the updated signed out state.
*/
const signinChanged = val => {
    console.log('Signin state changed to ', val)
};

/**
* Listener method for when the user changes.
*
* @param {GoogleUser} user the updated user.
*/
const userChanged = user => {
    const profile = user.getBasicProfile()
    const userProfile = profile ? {
        id: profile.getId(), // Don't use for DB entries, generate back-end session token
        name: profile.getName(),
        image: profile.getImageUrl(),
        email: profile.getEmail()
    } : {}

    console.log('user now', userProfile)
}

export function signOut() {
    window.console.log('trying to sign out')
    const auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => {
        console.log('User signed out.')
    });
}

export function signIn() {
    const auth2 = gapi.auth2.getAuthInstance()
    auth2.signIn().then(user => {
        console.log('User signed in.', user)
    });
}
