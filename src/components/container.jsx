
const Container = ({ children }) => {
    return (
        <div className="w-full h-full flex justify-center mt-10"  >
            <div className="w-[20rem] md:w-[30rem] h-auto ">
                {children}
            </div>
        </div>
    );
}

export default Container;