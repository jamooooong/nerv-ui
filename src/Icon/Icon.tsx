import icons from "../shared/assets/icons";

export interface IconProps {
  /** 아이콘 종류 */
  name:
    | "arrow_forward"
    | "close"
    | "delete"
    | "done"
    | "edit"
    | "favorite"
    | "home"
    | "menu"
    | "notifications"
    | "person"
    | "search"
    | "settings"
    | "share"
    | "star"
    | "thumb_up";
  /** 아이콘 색상 */
  color: "shinji" | "asuka" | "rei" | "misato" | "gray";

  /** 아이콘 크기 */
  size?: "small" | "medium" | "large";
}

export const Icon = ({ name, color, size, ...props }: IconProps) => {
  const SVGIcon = icons[name];
  const colorClasses = {
    shinji: "fill-shinji",
    asuka: "fill-asuka",
    rei: "fill-rei",
    misato: "fill-misato",
    gray: "fill-gray-400",
  }[color || "shinji"];
  const sizeClasses = {
    small: "w-6 ",
    medium: "w-8 ",
    large: "w-12",
  }[size || "medium"];
  return <SVGIcon className={`${sizeClasses} ${colorClasses} `} {...props} />;
};
