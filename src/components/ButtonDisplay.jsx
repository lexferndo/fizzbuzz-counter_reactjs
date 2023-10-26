/* eslint-disable react/prop-types */
function ButtonDisplay({ params, name }) {
  return (
    <div>
      <button onClick={params}>{name}</button>
    </div>
  );
}

export default ButtonDisplay;
