import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = (props) => {
  const location = useLocation()
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        {location.pathname === '/' && <Button color={props.buttonTitle ? 'red' : 'green'} title={props.buttonTitle} onClick={props.show}/>}
        
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header