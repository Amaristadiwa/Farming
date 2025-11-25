export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}) {
  const baseStyles =
    'font-medium rounded-full transition-all duration-200 inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900',
    secondary: 'bg-green-700 hover:bg-green-800 text-white',
    outline: 'border-2 border-gray-300 hover:border-gray-400 text-gray-700'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
