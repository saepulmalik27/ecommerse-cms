export type SelectProps = {
    options: string[];
    placeholder: string;
    onSelect: (value: string) => void;
    defaultValue?: string;
};
