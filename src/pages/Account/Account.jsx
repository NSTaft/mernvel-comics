function Account(props) {
    return (
        <>
            <h2>FIRST NAME: {props.user.firstname}</h2>
            <h2>FIRST NAME: {props.user.lastname}</h2>
            <h2>EMAIL: {props.user.email}</h2>
        </>
    )
}

export default Account