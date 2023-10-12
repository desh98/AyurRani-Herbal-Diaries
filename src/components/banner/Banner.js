import Cover from '../core/cover/Cover';
import MenuBar2 from '../core/menubar2/MenuBar';
import PageHeader from '../core/pageheader/PageHeader';
import './Banner.css';
import image from './image.png';

function Banner(){
    return(
        <div className= "Banner-main">
            <div className="container Banner-container">
                <Cover image="banner.png"/>
            </div>
            <PageHeader image={ image } name="Leon Academy" username="@leonacademy"
            category="secondary school" buttonText="Contact Us" link="leonacademy.com"/>
            
            <div class="row">
                <div class="col-md-8">
                    <MenuBar2 />
                </div>
                <div class="col-md-4">

                </div>
           </div>
        </div>
    );
}

export default Banner;