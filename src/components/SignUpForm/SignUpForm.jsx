import { Component } from "react";
import "./SignUpForm.css"

export default class SignUpForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    error: ""
  };

    
    //event handler for the form's submit button
    handleSubmit = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ""
        });
    }

    // handle submit is what sends user info to the database.
    handleSubmit = async (evt) => {
        // Prevent form from being submitted to the server
        evt.preventDefault();
    };
    
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Confirm</label>
                    <input
                        type="password"
                        name="confirm"
                        value={this.state.confirm}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" disabled={disable}>
                    SIGN UP
                    </button>
                </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}