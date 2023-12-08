import "./Button.style.css";

export function Button({ children, ...buttonProps }) {
  return (
    <button className="button" {...buttonProps}>
      {children}
    </button>
  );
}