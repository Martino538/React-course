export default function TabButton({children, functionProp, isActive}) {
    return(
        <li>
            <button className={isActive ? 'active' : undefined} onClick={functionProp} >{children}</button>
        </li>
    );
}