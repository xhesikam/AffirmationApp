import {ReactNode} from "react";
export interface inputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
  }
  
  export interface formProps {
    children: ReactNode;
    action: (formData: FormData) => void;
    className?: string;
    onSubmit?: () => void;
  }

  export interface buttonProps {
    type?: "button" | "submit" | "reset";
    text: string | ReactNode;
    onClick?: () => void;
    actionButton?: boolean;
    bgColor?: string;
  }
  
  export interface affirmationProps {
    id: string;
    title?: string | null;
    wasSaid: boolean;
    createdAt?: Date;
  }