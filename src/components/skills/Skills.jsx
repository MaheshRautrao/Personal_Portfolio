import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    {
      src: "bootstrap.svg",
      skill: "Bootstrap",
    },
    {
      src: "css.svg",
      skill: "Css",
    },
    {
      src: "firebase.svg",
      skill: "Firebase",
    },
    {
      src: "git.svg",
      skill: "Git",
    },
    {
      src: "html5.svg",
      skill: "Html",
    },
    {
      src: "javascript.svg",
      skill: "Javascript",
    },
    {
      src: "nodejs.svg",
      skill: "Node.js",
    },
    {
      src: "react-router.svg",
      skill: "React Router",
    },
    {
      src: "react.svg",
      skill: "React.js",
    },
    {
      src: "redux.svg",
      skill: "React Redux",
    },
    {
      src: "tailwindcss.svg",
      skill: "Tailwind Css",
    },
  ];
  return (
    <div>
      <p>Skills & Tools</p>
      <div className="flex flex-wrap justify-center ">
        {skills.map((skillcard, ind) => (
          <SkillCard
            key={ind}
            img_src={skillcard.src}
            skill={skillcard.skill}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
