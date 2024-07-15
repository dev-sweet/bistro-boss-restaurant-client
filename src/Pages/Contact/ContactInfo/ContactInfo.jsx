import { BiSolidPhoneCall } from "react-icons/bi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { IoLocation } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section>
      <SectionTitle title="Our location" subtitle="Visit Us" />
      <div className="w-3/4 mx-auto flex gap-10">
        <div className="border-2 border-gray-200 w-[424px] text-center">
          <div className="w-full bg-[#D1A054] py-5 text-white text-2xl flex items-center justify-center">
            <BiSolidPhoneCall />
          </div>
          <div className="p-10 pt-0">
            <div className="bg-gray-100 py-10 h-[180px] flex-col items-center justify-center">
              <h3 className="text-3xl uppercase">PHONE</h3>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 w-[424px] text-center">
          <div className="w-full bg-[#D1A054] py-5 text-white text-2xl flex items-center justify-center">
            <IoLocation />
          </div>
          <div className="p-10 pt-0">
            <div className="bg-gray-100 py-10 h-[180px] flex-col items-center justify-center">
              <h3 className="text-3xl uppercase">Location</h3>
              <p>Chicago, Illinois, United States</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 w-[424px] text-center">
          <div className="w-full bg-[#D1A054] py-5 text-white text-2xl flex items-center justify-center">
            <FaRegClock />
          </div>
          <div className="p-10 pt-0">
            <div className="bg-gray-100 py-10 h-[180px] flex-col items-center justify-center">
              <h3 className="text-3xl uppercase">Working Hours</h3>
              <p>
                Mon - Fri: 08:00 - 22:00 <br />
                Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
