// Define the props interface for the NullDataError component
interface NullDataErrorProps{
    title: string; // Title to be displayed
}

// Define the NullDataError component
const NullDataError: React.FC<NullDataErrorProps> = ({title}) => {
    return(
        // Render a div to display the null data message
        <div className="w-full h-[50vh] flex items-center justify-center text-xl md:text-2xl">
            {/* Render the title inside a paragraph with font-medium */}
            <p className="font-medium text-red-700">{title}</p>
        </div>
    )
};

export default NullDataError;