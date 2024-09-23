import './style.css'

const Button = (props) => {
    return (
        <div>
            <button className='button' onClick={() => alert(`A label do botão é ${props.label}`)}>{props.label}</button>
        </div>
    )
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button