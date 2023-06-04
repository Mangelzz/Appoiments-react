const Error = ({children}) => {
    return (
        <div className="bg-red-600 text-white rounded-md text-center p-3 uppercase font-bold mb-3">
            <p>{children}</p>
        </div>
    )
}

export default Error