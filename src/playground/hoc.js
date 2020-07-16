import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private. So dont share!</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const reqireAuthentication = (Hello) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <Hello {...props} /> : <p>Please login to see the info</p>}
        </div>
    )
}
// const AppInfo = withAdminWarning(Info)
const AuthInfo = reqireAuthentication(Info)
// ReactDOM.render(<AppInfo isAdmin={true} info= 'These are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info= 'These are the details'/>, document.getElementById('app'))