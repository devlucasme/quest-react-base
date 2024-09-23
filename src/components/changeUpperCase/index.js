import './style.css'

const ChangeUpperCase = (props) => {
    return <p className='text' style={{color: props.color}}>{props.label.toUpperCase()}</p>
}

ChangeUpperCase.defaultProps = {
    color: 'red'
}

export default ChangeUpperCase