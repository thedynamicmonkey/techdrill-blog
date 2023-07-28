

const SignIn = () => {

    function displayMessage() {

        if (document.getElementById('checkBox').checked)
            document.getElementById('texto').innerHTML = "Account has been created successfully";
        else
            document.getElementById('texto').innerHTML = "Please tick before entering ";
    }

    return (
        <div className="signin">
            <div className="heading-title">
                <h1 className="heading-title__header">SpeakAi</h1>
            </div>
            <div className="form" id="form">
                <form className="form-data">
                    <h3 className="form-data__heading">Don't miss the latest post on Artificial Intelligence</h3>
                    <div className="form__group">
                        <input
                            type="email number"
                            className="form__input same"
                            placeholder="Phone Number, Email or Username"
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
                        <p className="tick">Ready to Again enter into the world of SpeakAi?
                        <input
                            id="checkBox"
                            type="checkbox"
                            required
                        />
                        </p>

                    <div className="form__group">
                        <input type="button" value="Sign in" className="btn" onClick={displayMessage}></input>
                    </div>
                    <p id="texto"></p>
                </form>
            </div>
        </div>
    );
}

export default SignIn;