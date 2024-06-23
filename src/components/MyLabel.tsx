import './MyLabel.css';

interface Props {
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Text to display
     */
    label: string;

    /**
     * Capitalize all letters
    */
    allCaps?: boolean;

    /**
     * Label color
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * Font color
    */
    fontColor?: string;
}

export const MyLabel = ({ 
    size = 'normal', 
    allCaps = false,
    fontColor,
    label,
    color,
}: Props) => {
    return (
        <span style={{ color: fontColor }} className={`${ size } ${ color } label`}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    );
};
