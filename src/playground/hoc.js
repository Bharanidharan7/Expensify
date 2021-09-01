import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>Message:-{props.info}</p>
    </div>
)

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>Highly confidential</p>}
            <WrappedComponent {...props}/>
        </div>
    )

}


const requireAuthentication=(ToBeWrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ?
            <ToBeWrappedComponent {...props}/>
            :<p>Please login to view details</p>}
            </div>
    )

}

const AdminInfo= withAdminWarning(Info);
const AuthInfo= requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='Some info'/>,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Highly Confidential'/>,document.getElementById('app'))