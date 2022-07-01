import "./SignUpForm.css"

export default function SignUp() {
    
    //event handler for the form's submit button
    const handleSubmit = (evt) => {
        //evt.preventDefault();
    }
    
    return (
        <>
            <h1>Please sign up to access our comic collection!</h1> 
            <form>
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <input type="submit" onClick={handleSubmit} value="Sign-In"></input>
            </form>
        </>
    );
}