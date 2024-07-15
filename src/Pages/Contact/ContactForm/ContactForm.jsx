import { FaRegPaperPlane } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ContactForm = () => {
  return (
    <section className="w-3/4 mx-auto">
      <SectionTitle title="contact form" subtitle="Send us a message" />
      <form className="card-body">
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your phone"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message*</span>
          </label>
          <textarea
            placeholder="Write your message"
            className="input input-bordered h-[200px]"
            required
          />
        </div>
        <div className="text-center">
          <button className="btn btn-sm bg-[#835D23] text-white">
            Send Message <FaRegPaperPlane />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
