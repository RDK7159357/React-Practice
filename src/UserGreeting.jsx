import PropTypes from 'prop-types';
function UserGreeting({username="Guest", isLoggedin=false}) {

const welcomeMessage = <h1 className="welcome-message">Welcome {username}</h1>;
const loginPrompt = <h1 className="login-prompt">User not Logged in!!</h1>;
return(isLoggedin ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string,
}


// UserGreeting.defaultProps = {
//     isLoggedin: false,
//     username: "Guest"
// }

// if(props.isLoggedin){
//     return(
//         <h1>Welcome {props.username}</h1>
//     );
// }    else{
//         return (
//             <h1>User not Logged in!!</h1>
//         );
//     }

export default UserGreeting;