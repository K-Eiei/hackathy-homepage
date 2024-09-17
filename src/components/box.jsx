export default function Box({ children, css }) {
    return (
        <div className={`w-full h-auto ${css} flex justify-center items-center`}>

            {children}

        </div>
    );
}