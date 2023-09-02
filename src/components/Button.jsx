
const Button = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <button {...props}>{props.children}</button>
  )
}

export default Button