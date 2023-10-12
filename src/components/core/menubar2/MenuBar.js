import Menu from './Menu';
import './MenuBar.css';

function MenuBar2() {
    return (
        <div className="MenuBar-main">
            <Menu name="Home"/>
            <Menu name="Events"/>
            <Menu name="Reviews"/>
            <Menu name="Videos"/>
            <Menu name="More"/>
        </div>
    );
}

export default MenuBar2;