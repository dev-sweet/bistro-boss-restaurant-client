import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle title="add an item" subtitle="What's new?"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full">
          <div className="label font-bold">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            {...register("name")}
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex gap-5 mt-5">
          <label className="form-control w-full max-w-xs font-bold">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category")}
              className="select select-bordered"
              defaultValue="default"
            >
              <option disabled default>
                Category
              </option>
              <option>Salads</option>
              <option>Pizza</option>
              <option>Soups</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label font-bold">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price")}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label font-bold">
            <span className="label-text">Recipe details*</span>
          </div>
          <textarea
            {...register("details")}
            className="textarea textarea-bordered h-[150px]"
            placeholder="Bio"
          ></textarea>
        </label>
        <div className="mt-5">
          <input
            {...register("image")}
            type="file"
            className="file-input w-full max-w-xs"
          />
          <br />
          <button
            type="submit"
            className="btn bg-[#835D23] text-white px-10 mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
