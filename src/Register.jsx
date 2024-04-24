function Register() {
    return (
        <>
        <div className="login">
        <form /*action="submit-form" method="POST"*/ className="register"> 
            <h1>Register</h1>
            <div className="firstname">
                <label htmlFor="firstName">First Name :</label>
                <input type="text" id="firstName" />
            </div>
            <div className="lastname">
                <label htmlFor="family Name">Family Name :</label>
                <input type="text" id="family Name" />
            </div>
                <div className="email">
                <label htmlFor="email">email :</label>
            <input type="text" id="email" />
            </div>
            <div className="password">
                <label htmlFor="password">password :</label>
                <input type="text" id="password" />
            </div>
            <div className="password2">
                <label htmlFor="password2">Confirm password :</label>
                <input type="text" id="password2" />
            </div>
            <div className="terms">
                <label htmlFor="terms">I have read and agreed to the conditions</label>
                <input type="checkbox" id="terms" />
            </div>
            <button>Register Now</button>
        </form>
        </div></>
        
    )
}

export default Register