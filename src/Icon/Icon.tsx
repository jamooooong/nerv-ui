import icons from "../shared/assets/icons";

export interface IconProps {
  /** 아이콘 종류 */
  name:
    | "add"
    | "arrow_back"
    | "arrow_forward"
    | "close"
    | "delete"
    | "edit"
    | "menu"
    | "search";
  /** 아이콘 색상 */
  color: "red" | "black";

  /** 아이콘 크기 */
  size?: "small" | "medium" | "large";
}

export const Icon = ({ name, color, size, ...props }: IconProps) => {
  const SVGIcon = icons[name];
  const colorClasses = {
    red: "fill-red-600",
    black: "fill-black",
  }[color || "red"];
  const sizeClasses = {
    small: "w-6 ",
    medium: "w-8 ",
    large: "w-12",
  }[size || "medium"];
  return <SVGIcon className={`${sizeClasses} ${colorClasses}`} />;
};
