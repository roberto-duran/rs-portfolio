"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const SkillSchema = z.object({
  image: z.string().optional(),
  title: z.string().min(1).max(50),
  progress: z.number().min(0).max(100),
  color: z.string().min(1).max(50),
});

type Skill = z.infer<typeof SkillSchema>;

type Props = {
  newSkill: boolean;
  skill: Skill;
};

export default function SkillDetail({ newSkill, skill }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Skill>({ resolver: zodResolver(SkillSchema) });
  return (
    <div className="min-w-[500px]">
      <h1 className="text-2xl text-center p-5">
        {newSkill ? "Add new Skill!" : "Edit Skill"}
      </h1>
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("title")}
          type="text"
          placeholder="Add Title"
          name="title"
          defaultValue={skill.title}
          className="input input-bordered"
        />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
        <input
          type="number"
          placeholder={"Add Progress"}
          name={"progress"}
          defaultValue={skill.progress}
          className="input input-bordered"
        />
        <div className="flex flex-col justify-center items-center space-y-2">
          {skill.image && (
            <img src={skill.image} className="w-16 h-16" alt={skill.title} />
          )}
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
            defaultValue={skill.color}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
