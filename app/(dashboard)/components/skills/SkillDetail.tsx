"use client";
import { z } from "zod";
import { useState } from "react";

const SkillSchema = z.object({
  image: z.string().optional(),
  title: z.string().min(1).max(50),
  progress: z.number().min(0).max(100),
  color: z.string().min(1).max(50),
});

type Props = {
  newSkill: boolean;
  skill: z.infer<typeof SkillSchema>;
};

export default function SkillDetail({ newSkill, skill }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className="min-w-[500px]">
      <h1 className="text-2xl text-center p-5">
        {newSkill ? "Add new Skill!" : "Edit Skill"}
      </h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Add Title"
          name="title"
          value={skill.title}
          className="input input-bordered"
        />
        <input
          type="number"
          placeholder={"Add Progress"}
          name={"progress"}
          value={skill.progress}
          className="input input-bordered"
        />
        <div className="flex flex-col justify-center items-center space-y-2">
          {skill.image && <img src={skill.image} className="w-16 h-16" />}
          <input
            type="file"
            name="image"
            accept="image/svg+xml"
            className="file-input file-input-bordered file-input-primary w-full ml-0"
            required
          />
        </div>
        <div className="flex justify-between px-2">
          <label htmlFor="color">Add Color</label>
          <input
            type="color"
            id="color"
            name="color"
            value={skill.color}
            required
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
