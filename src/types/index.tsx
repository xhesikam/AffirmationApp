export interface inputProps {
    name: string;
    type: string;
    placeholder?:string;
    value?: string;
}

export interface formProps{
    children: ReactNode;
    action: (formData: FormData) => void;
    className?:String;
    onSubmit?:()=>void;
}