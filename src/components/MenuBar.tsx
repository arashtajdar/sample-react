function MenuBar() {
    return (
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">Create Activity</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
            </li>
        </ul>
);
}

export default MenuBar;
