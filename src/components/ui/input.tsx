import { InputProps } from "@/types";

export function Input({ value, onChange, placeHolder }: InputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeHolder}
      className="bg-zinc-900 border border-zinc-700 rounded-md p-2 text-sm"
    />
  );
}
