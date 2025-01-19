export interface CheckBoxProps {
  /** Is this the principal call to action on the page? */
  color?: "shinji" | "asuka" | "rei" | "misato";
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const CheckBox = ({ color, size, label, ...props }: CheckBoxProps) => {
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
    <div className="flex flex-row gap-2">
      <input type="checkbox" />
      <p>{label}</p>
    </div>
  );
};
