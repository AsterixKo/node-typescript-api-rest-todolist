import { log } from 'console';
import { Request, Response } from 'express';
import { Op, Sequelize } from 'sequelize';
// import { User } from '../models/user.model';
// import { Product } from '../models/product.model';
// import { Provider } from '../models/provider.model';
import { Note } from '../models/note.model';

class NotesController {

    public async search(req: Request, res: Response) {

        try {
            const notes = await Note.findAll({
                where: Sequelize.literal('MATCH (description) AGAINST (:query)'),
                replacements: {
                    query: req.params.query
                }
            });
            res.send(notes);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    public async findAll(req: Request, res: Response) {

        const notes: Note[] = await Note.findAll();

        res.send(notes);

    }

    // public async showById(req: Request, res: Response){
    //     console.log(req.params.id);

    //     try {

    //         const user = await User.findByPk(req.params.id, { raw: true});

    //         res.send(user);

    //     } catch (error){
    //         res.json(error);
    //     }
    // }

    public async create(req: Request, res: Response) {

        try {
            const request = req.body;
            const newUser = await Note.create(request);

            res.json(newUser);

        } catch (error) {

            res.json(error);

        }

    }

    public async delete(req: Request, res: Response) {

        console.log(req.params.id);

        try {

            const user = await Note.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.sendStatus(200);

        } catch (error) {
            res.json(error);
        }
    }

    public async update(req: Request, res: Response) {

        try {

            const user = await Note.update(
                {
                    description: req.body.description
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            );

            res.json(user);

        } catch (error) {
            res.json(error);
        }
    }

}

export const notesController = new NotesController();