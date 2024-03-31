import background from "../assets/original6.jpeg";
import map from "../assets/staticmap.png";
import Banner from "./Banner";

const ContactUs = () => {
  return (
    <>
      <Banner background={background} isSmall title="About Us" />{" "}
      <div className="w-3/4 m-auto my-10 text-xl gap-10 flex flex-col">
        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-1/2">
            <img src={map} alt="" className="rounded-xl" />
          </div>
          <div className="w-1/2">
            <div className="text-5xl mb-10">Contact Info</div>
            <hr className="my-5" />
            <div>
              Address
              <div className="text-sm pl-4">
                1941 TAMARACK LN COLDWATER, ON L0K 1E0
              </div>
            </div>
            <div>
              Phone
              <div className="text-sm pl-4">+1 (905) 903-0910</div>
            </div>
            <div>
              E-mail
              <div className="text-sm pl-4">info@tamarackmarina.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
