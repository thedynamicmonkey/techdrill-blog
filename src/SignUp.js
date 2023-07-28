const SignUp = () => {
    function displayMessage() {

        if (document.getElementById('checkBox').checked)
            document.getElementById('texto').innerHTML = "Account has been created successfully";
        else
            document.getElementById('texto').innerHTML = "Please tick before entering ";
    }
    return (
        <div className="signup">
            <div className="heading-title">
                <h1 className="heading-title__header">SpeakAi</h1>
            </div>
            <div className="form" id="form">
                <form className="form-data">
                    <h3 className="form-data__heading">Sign up to see latest post on AI from your friends</h3>
                    <div className="form__group">
                        <input
                            type="text"
                            className="form__input same"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="form__group">
                        <input
                            type="email"
                            className="form__input same"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form__group">
                        <input
                            type="number"
                            className="form__input same"
                            placeholder="Mobile Number"
                            required
                        />
                    </div>                    
                    <div className="form__group">
                        <input
                            type="text"
                            className="form__input same"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="form__group">
                        <input
                            type="password"
                            className="form__input same"
                            placeholder="Password"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="form__group">
                        <input
                            type="password"
                            className="form__input same"
                            placeholder="Confirm Password"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <p className="para">
                        <span className="para1">
                            People who use our service may have uploaded your contact information to Instagram. 
                            <a href="/signup">Learn More</a>
                            <br />
                            <br />
                            By signing up, you agree to our 
                            <a href="/signup">Terms</a> , 
                            <a href="/signup">Privacy Policy</a> and 
                            <a href="/signup">Cookies Policy</a>  .
                            </span>
                    </p>
                    <p className="tick">Ready to enter into the world of SpeakAi?
                        <input
                            id="checkBox"
                            type="checkbox"
                            required
                        />
                        </p>
                    <div className="form__group">
                        <button className="btn" onClick={displayMessage}>Sign up</button>
                    </div>
                    <p id="texto"></p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;