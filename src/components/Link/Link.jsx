import "./Link.style.css";

export function Link({ children, ...linkProps }) {
  return (
    <a className="link" {...linkProps}>
      {children}
    </a>
  );
}
