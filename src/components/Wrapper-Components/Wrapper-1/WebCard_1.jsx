import FooterWebsite from "./FooterWebsite_1";
import HeaderWebsite from "./HeaderWebsite_1";

const WebCard = (props) => {
  return (
    <div>
      <HeaderWebsite />
      {props.children}
      <FooterWebsite />
    </div>
  );
};

export default WebCard;
