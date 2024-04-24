function LogIn() {
    return (
        <>
        <div className="login">
        <form /*action="submit-form" method="POST"*/ className="register">
            <h1>Log In</h1>
            <div className="email">
                <label htmlFor="email">email :</label>
                <input type="text" id="email" />
            </div>
            <div className="password">
                <label htmlFor="password">password :</label>
                <input type="text" id="password" />
            </div>
            <button>Log In</button>
        </form>
        </div></>
        
    )
}

export default LogIn