interface PersonProps {
    children?: React.ReactNode;
}
function Header(props : PersonProps) {
    return (
        <>
            <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/manage-activities">Manage Activity</a></li>
        </ul>
            {props.children}
        </>
);
}

export default Header;
