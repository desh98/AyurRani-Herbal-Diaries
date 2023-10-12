import Menu from './Menu';
import './MenuBar.css';

function MenuBar() {
    return (
        <div className="MenuBar-main">
            <Menu name="Home" icon="fa-solid fa-house"/>
            <Menu name="Watch" icon="fa-brands fa-youtube" count="4"/>
            <Menu name="Groups" icon="fa-solid fa-people-group"count="24"/>
            <Menu name="Games" icon="fa-solid fa-people-group"/>
        </div>
    );
}

export default MenuBar;