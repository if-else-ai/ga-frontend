import "./Button.css"

const Button = (props) => {
  return (
      <button className="sub-button__main">
        {props.children}
      </button>
  )
}

  export default Button;
