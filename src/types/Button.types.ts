export type ButtonProps = {
  variant: "search" | "text";
  text?: string;
  type?: "submit" | "button";
  onClick?: () => void;
};
