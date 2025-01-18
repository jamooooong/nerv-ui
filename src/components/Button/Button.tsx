export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  color?: "shinji" | "asuka" | "rei" | "misato";
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({ color, label, size }: ButtonProps) => {
  const colorClasses = {
    shinji: "bg-shinji",
    asuka: "bg-asuka",
    rei: "bg-rei",
    misato: "bg-misato",
  }[color || "shinji"];
  const sizeClasses = {
    small: "px-4 py-2 text-sm font-medium",
    medium: "px-4 py-2 text-base font-medium",
    large: "px-8 py-4 text-xl font-medium",
  }[size || "small"];

  return (
    <button className={`${sizeClasses} ${colorClasses} rounded-xl text-white`}>
      {label}
    </button>
  );
};
