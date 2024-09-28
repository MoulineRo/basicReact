import {useState} from "react";


const Button = ({text, type, notification}) => {
    const [modal, setModal] = useState(false)

    const notificationMessage = () => {
        setModal(true)
    }

    const notificationCancel = () => {
        setModal(false)
    }

    return (
        <div>
            <button type={type} onClick={notificationMessage} onBlur={notificationCancel}>
                {text}
            </button>
            {modal && (
                <div>{notification}</div>
            )}
        </div>
    )
}

export default Button