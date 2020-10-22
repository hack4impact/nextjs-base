export default function TextField({placeholder, name, type, icon}) {
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