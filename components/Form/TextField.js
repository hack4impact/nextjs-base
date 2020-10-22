import PropTypes from "prop-types";

export default function TextField({name, placeholder, type, icon}) {
    return (
        <div className="field">
        <p className={`control ${icon && "has-icons-left"}`}>
            <input 
            className="input" 
            type={type || "text"} 
            placeholder={placeholder}
            name={name}/>
            {
                icon &&
                <span className="icon is-small is-left">
                    <i className={`fas ${icon}`}></i>
                </span>
            }
        </p>
    </div>
    )
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "email", "password"]),
    icon: PropTypes.string
}