import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "Física" },
        { name: "Inglês" },
        { name: "Matemática" },
        { name: "Química" },
        { name: "React" },
        { name: "Git/Github" },
        { name: "Educação Física" },
    ]);
};
