const SkillCard = ({ img_src, skill }) => {
  const baseImgSrc = "/public/skills_tools_assets/";
  return (
    <div className="flex flex-col items-center justify-between w-32 h-32 p-3 m-3 rounded-md">
      <img src={baseImgSrc + img_src} alt="skill" className="w-16" />
      <span>{skill}</span>
    </div>
  );
};

export default SkillCard;
