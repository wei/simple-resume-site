import type { Skill } from "../types";

type SkillBadgeProps = { skill: Skill };

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-500">
      {skill.name}
    </div>
  );
}

export default SkillBadge;
