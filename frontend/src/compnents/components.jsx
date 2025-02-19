export function Card({ children }) {
    return <div className="bg-white p-4 rounded-lg shadow-md">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }

  export function Button({ children, ...props }) {
    return (
      <button className="bg-blue-500 text-white px-4 py-2 rounded" {...props}>
        {children}
      </button>
    );
  }
  
  export function Input({ type, placeholder, ...props }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="border p-2 rounded w-full"
        {...props}
      />
    );
  }
  