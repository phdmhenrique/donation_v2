import './FullSize.css';

function FullSize(props) {
  return (
    <div className="fullsize">
      {props.children}
    </div>
  )
}

export default FullSize