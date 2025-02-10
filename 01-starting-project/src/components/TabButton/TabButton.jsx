export default function TabButton({children, functionProp}) {
    return(
        <li>
            <button onClick={functionProp} >{children}</button>
        </li>
    );
}