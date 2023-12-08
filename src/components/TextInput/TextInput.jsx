import './TextInput.style.css';

export function TextInput({ id, label, ...inputProps }) {
  return (
    <div className="text-input">
      <label htmlFor={id}>{label}:</label>
      <input id={id} {...inputProps}/>
    </div>
  );
}