export default function SubmitButton({children}): React.ReactElement {
    return(
        <button className="button is-primary is-fullwidth" type="submit"> {children} </button>
    )
}