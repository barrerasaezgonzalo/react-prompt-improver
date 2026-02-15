import { modeOptions } from "@/constants";
import { Select } from "../ui/select";
import { ModeSelectorProps } from "@/types";

export function ModeSelector({ value, onChange }: ModeSelectorProps) {
  return <Select options={modeOptions} value={value} onChange={onChange} />;
}
