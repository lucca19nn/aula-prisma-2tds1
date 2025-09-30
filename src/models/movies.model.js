import prisma from "../../prisma/prisma.js";

class GameModel {
    async findAll() {
        const movies = await prisma.movie.findMany({});

        return {
            total: games.length,
            games,
        };
    }


    async create(data) {
        const movie = await prisma.movie.create({
            data,
        });

        return game;
    }
}

export default new MovieModel();