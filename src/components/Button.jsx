const Buttons = (props) => {
  const styles = {
    backgroundColor: props.color
  }
  return (
    <button onClick={props.onClick} style={styles} className="btn">Add</button>
  )
}

export default Buttons