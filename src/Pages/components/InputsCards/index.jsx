import { AiOutlineCloudUpload } from "react-icons/ai";
import "./styles.css";

const InputCard = ({type="text", id, label, placeholder="placeholder", onChange, required=false, defaultValue="", className="input-container", haveLabel=true}) => {
    return(
        <div className={`${className}`}>
            {haveLabel && <label htmlFor={id}>{label} {required && "*"}</label>}
            
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                required={required}
                defaultValue={defaultValue}
            />
        </div>
    );
}

const TextAreaCard = ({id, label, placeholder="placeholder", onChange, required=false, defaultValue=""}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <textarea
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                required
                defaultValue={defaultValue}
            />
        </div>
    );
}

export { InputCard, TextAreaCard };