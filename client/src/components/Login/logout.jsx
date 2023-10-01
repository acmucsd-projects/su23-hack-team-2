import { GoogleLogout } from 'react-google-login';

const clientId = "408051983758-p7n4273ka54c34e8nt5jm18q3kqmd6nb.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        console.log("Log out successful!");
    }
    return (
        <div id = "signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess = {onSuccess}
            />
        </div>
    );
}

export default Logout;