import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import WebCard_2 from "../components/Wrapper-Components/Wrapper-2/WebCard_2";
import { BoxIconElement } from "boxicons";
import { Link } from "react-router-dom";
function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

// Data will be fixed later
const UserConfigure = () => {
  return (
    <WebCard>
      <Box className="settings-bigbox">
        <h1 className="settings-bigbox__header">Account Settings</h1>
        <div className="settings-bigbox__body">
          <div className="settings-bigbox__body--stuff">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile Picture"
              className="settings-bigbox__body--stuff--image"
            />
            <box-icon
              name="edit-alt"
              className="settings-bigbox__body--stuff--icon"
            ></box-icon>
            <h3 className="settings-bigbox__body--stuff--name">
              User's Name Here
            </h3>
          </div>
          <div>
            <h2 className="settings-bigbox__body--label">Email</h2>
            <Box className="settings-bigbox__body--box">
              <h3 className="settings-bigbox__body--box--label">
                firstname.nickname@newton.ac.th
              </h3>
            </Box>
            <div className="settings-bigbox__body--container">
              <h2 className="settings-bigbox__body--label">
                Newton Senior Highschool
              </h2>
              <Box className="settings-bigbox__body--box">
                <h3 className="settings-bigbox__body--box--label">
                  Year # / User's Track Here
                </h3>
              </Box>
            </div>
          </div>
          <div className="settings-bigbox__body--inbok">
            <div>
              <h2 className="settings-bigbox__body--passswordLabel">
                Password
              </h2>
              <Box className="settings-bigbox__body--newBox">
                <button className="settings-bigbox__body--newBox--button">
                  Change Password
                </button>
              </Box>
            </div>
            <div>
              <Box className="settings-bigbox__body--signout">
                <button className="settings-bigbox__body--signout--button">
                  Sign out
                </button>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </WebCard>
  );
};

export default UserConfigure;
