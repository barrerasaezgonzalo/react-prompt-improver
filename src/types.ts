import { ButtonHTMLAttributes, TextareaHTMLAttributes } from "react";

export type Mode = "rapido" | "guiado" | "preciso";

export interface PromptInputProps {
  prompt: string;
  mode: Mode;
  onPromptChange: (value: string) => void;
  onModeChange: (mode: Mode) => void;
  onSubmit: () => void;
  loading: boolean;
  setTemplate?: (template: Template | null) => void;
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface ModeSelectorProps {
  value: Mode;
  onChange: (value: Mode) => void;
}

export interface optionsProps {
  id: Mode;
  label: string;
}

export interface SelectProps {
  options: optionsProps[];
  value: Mode;
  onChange: (value: Mode) => void;
}

export type PromptContextType = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  response: string;
  setResponse: (response: string) => void;
  extraData: string;
  setExtraData: (extraData: string) => void;
  improvedPrompt: string | null;
  setImprovedPrompt: (improved: string) => void;
  role: string;
  setRole: (role: string) => void;
  objective: string;
  setObjective: (objective: string) => void;
  inputContext: string;
  setInputContext: (inputContext: string) => void;
  constraints: string;
  setConstraints: (constraints: string) => void;
  outputFormat: string;
  setOutputFormat: (outputFormat: string) => void;
  template: Template | null;
  setTemplate: (template: Template | null) => void;
};

export interface OriginalPromptProps {
  prompt: string;
}

export interface OptionsPromptProps {
  generate: () => void;
  loading: boolean;
  improvedPrompt: string | null;
}

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeHolder: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  href: string;
  prompt: string;
}

export interface FromTemplateProps {
  template: Template | null;
}
