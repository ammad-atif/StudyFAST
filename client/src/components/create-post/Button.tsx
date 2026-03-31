interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-secondary hover:opacity-80"
      : "bg-secondary text-primary hover:brightness-80";

  return (
    <button
      {...props}
      className={"px-6 py-2 rounded-lg hover:cursor-pointer hover:scale-110 transition-all " + variantClasses}
    >
      {children}
    </button>
  );
};
