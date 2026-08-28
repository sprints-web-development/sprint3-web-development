export default function Person({ user }) {

    return (
        <div className={`person ${user.style === 1 ? '' : 'professional'}`}>
            <div className="header">
                <div className="green-circle">
                    <p>{user.abbreviation}</p>
                </div>
                <p>{user.type}</p>
            </div>
            <div className="content">
                <h1>{user.group}</h1>
                <p className="notation">{user.note}</p>
                <p>{user.text}</p>
                <div className="separator"></div>
                <ul className="person-characteristics">
                    {user.list.map((list, index) => (
                        <li key={index}>{list.text}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}