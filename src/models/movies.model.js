import prisma from "../../prisma/prisma.js";

class MovieModel {
    async findAll() {
        const movies = await prisma.movie.findMany({});

        return {
            total: movie.length,
            movie,
        };
    }

    async create(data) {
        const movie = await prisma.movie.create({
            data,
        });

        return movie;
    }
}

export default new MovieModel();