import { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { addCurrentUserAction } from "../../redux/actions/UserAction";
import Nav from "../../components/Nav/Nav";
import Category from "../../components/Category/Category"
import "./Home.scss";


const Home = () => {
  const [profile, setProfile] = useState([]);
  const jwtToken = useSelector((state) => state.authState.user.accessToken);
  const email = useSelector((state) => state.authState.user.email);

  console.log(jwtToken);
  console.log("email", email);
  console.log("profile", profile);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let response = await fetch(`http://localhost:5000/users/currentUser/${email}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });

        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setProfile(data);
          dispatch(addCurrentUserAction({ data }));
          console.log(profile);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, [])

  return (
    <>
      <Nav />
      <div className="home">
        <h3>
          “Knowledge is power. Sharing knowledge is the key to unlocking that
          power.” - Martin Uzochukwu Ugwu
        </h3>
        <div className="bannerArt d-flex">
          <div className="left">
            <div className="block1"></div>
          </div>
          <div className="middle">
            <div className="block2"></div>
          </div>
          <div className="right">
            <div className="block3"></div>
          </div>
        </div>
          </div>
          <div className="browse">
        <h3>Browse By Category</h3>
        <div className="categories">
          <Category className="category" title={"Back-End Development"} img={"https://th.bing.com/th/id/R.7b8fbfeba3cfea03ce5d563abd6db6e2?rik=PIz1pmEicVslhA&riu=http%3a%2f%2flogopond.com%2flogos%2fa2dc2d250540d76f8c8d8b2b213836ec.png&ehk=WfIV9MIClFGsIOdHWn4WtbBMdOQFzxi%2fYNTrAsc7NrU%3d&risl=&pid=ImgRaw&r=0" }/>
          <Category title={"Front-End Development"} img={"https://cdn.dribbble.com/users/29868/screenshots/4591147/army_logo.png" }/>
          <Category title={"JavaScript"} img={"https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" }/>
          <Category title={"Java"} img={"https://www.viafirma.com/faq/wp-content/uploads/sites/12/2018/12/logo-java-applet.jpeg" }/>
          <Category title={"Data Analysis"} img={"https://st4.depositphotos.com/18657574/21814/v/1600/depositphotos_218141310-stock-illustration-data-analysis-vector-icon-isolated.jpg" }/>
          <Category title={"Python"} img={"https://th.bing.com/th/id/R.10327dc6812b05b66a2b6b44c55a097c?rik=nKIXnE7Aetd6Uw&pid=ImgRaw&r=0" }/>
          <Category title={"Databases"} img={"https://thumbs.dreamstime.com/b/database-icon-logo-modern-line-style-high-quality-black-outline-pictogram-web-site-design-mobile-apps-vector-80593881.jpg" }/>
        </div>
          </div>
    </>
  );
};

export default Home;
