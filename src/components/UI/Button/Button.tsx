import * as C from './Button.style'

type ButtonType = {
    aditionalStyles: string,
    text: string,
    onClick: () => void
}

const Button = ({aditionalStyles, text, onClick}:ButtonType) => {
    return(
        <C.Button onClick={onClick} aditionalStyles={aditionalStyles}>{text}</C.Button>
    )
}

export default Button