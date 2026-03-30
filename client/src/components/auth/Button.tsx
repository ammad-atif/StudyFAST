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
      className={
        "w-full  font-bold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:cursor-pointer  hover:scale-105 transition delay-100 duration-300 ease-in-out " +
        variantClasses
      }
    >
      {children}
    </button>
  );
};
