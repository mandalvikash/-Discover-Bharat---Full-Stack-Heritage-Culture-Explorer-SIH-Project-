import React from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

export default function Input({
  placeholder = '',
  value,
  onChange,
  type = 'text',
  className = '',
  id,
  name,
  required = false
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      required={required}
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200 ${className}`}
    />
  );
}