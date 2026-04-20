import './Skeleton.scss';

export default function Skeleton({ width, height, variant = 'rectangular', className = '', ...props }) {
    const style = {
        width: width || '100%',
        height: height || '100%',
    };

    return (
        <div 
            className={`skeleton skeleton--${variant} ${className}`} 
            style={style} 
            {...props}
        />
    );
}
