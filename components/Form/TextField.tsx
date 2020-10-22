import { TextFieldType } from "./types";

interface Props {
    name: string,
    placeholder: string,
    type?: TextFieldType,
    icon?: string
}

export default function TextField({name, placeholder, type = TextFieldType.text, icon}: Props): React.ReactElement {
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