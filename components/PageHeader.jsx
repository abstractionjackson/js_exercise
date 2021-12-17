export default function PageHeader({ text, handleClick }) {
    //Clickable header will reset results list
    return (
        <h1 className="text-4xl hover:underline text-pink-600 font-extrabold cursor-pointer" onClick={handleClick}>{text}</h1>
    )
}