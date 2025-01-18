export interface TextButtonProps {
  /** Is this the principal call to action on the page? */
  color?: "shinji" | "asuka" | "rei" | "misato";
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const TextButton = ({ color, label, size }: TextButtonProps) => {
  const colorClasses = {
    shinji: "text-shinji",
    asuka: "text-asuka",
    rei: "text-rei",
    misato: "text-misato",
  }[color || "shinji"];
  const sizeClasses = {
    small: " text-sm font-medium",
    medium: "text-base font-bold",
    large: "text-xl font-bold",
  }[size || "small"];

  return <button className={`${sizeClasses} ${colorClasses}`}>{label}</button>;
};
