export default function Card({
  children,
  hover = false,
  className = "",
  onClick,
}) {
  return (
    <div
      className={`card ${hover ? "card-hover" : ""} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
