import { useState } from 'react'


function Account(props) {

    const [updateUser, setUpdateUser] = useState({ firstname: props.user.firstname, lastname: props.user.lastname, email: props.user.email })


    function handleSubmit(evt) {
        evt.preventDefault()
        console.log(updateUser)
    }

    function formUser(evt) {
        const newFormUser = {[evt.target.name]: evt.target.value}
        setUpdateUser(newFormUser)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstname" value={props.user.firstname} onChange={formUser}/>
                    <input type="text" name="lastname" value={props.user.lastname} onChange={formUser}/>
                    <input type="text" name="email" value={props.user.email} onChange={formUser} />
                    <button type="submit">EDIT ACCOUNT INFO</button>

                </form>
            </div>


        </>
    )
}

export default Account