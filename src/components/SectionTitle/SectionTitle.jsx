const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="w-1/4 mx-auto py-10 text-center">
      <p className="text-[#D99904] mb-5">---{subtitle}---</p>
      <h2 className="text-4xl border-y-2 border-gray-400 py-4 uppercase">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
