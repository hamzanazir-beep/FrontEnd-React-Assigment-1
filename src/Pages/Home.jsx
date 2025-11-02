import {Context} from '../Hook/Context'
import { useContext } from "react";

import Explore from '../Components/Explore';
import Navbar from '../Components/Navbar';
import Contacts from '../Components/Contacts';
import Feed from './Feed';




const Home = () => {

    const {option}=useContext(Context);


  return (
    <>
   <Navbar/>
    <div className='container-fluid' id='home-main-div' style={{ marginTop: '50px' }}>
      <div className="row" style={{ height: '90vh' }}>
        <div className="col-3" id="explore-main-div"  style={{ backgroundColor: '#F2F4F7' }}>
          <Explore  />
        </div>

        <div className="col-6" id="feed-main-div" style={{backgroundColor:'#F2F4F7' }}>
      
 <Feed/>



        </div>

        <div className="col-3" id="contact-main-div" style={{ backgroundColor: '#F2F4F7' }}>
          <Contacts />
        </div>
      </div>
    </div>
     </>
  );
};

export default Home;
