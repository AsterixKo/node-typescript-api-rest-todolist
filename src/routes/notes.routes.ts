import { Router } from 'express';
import { notesController } from '../controllers/notes.controller';

class NotesRoutes {

    public router: Router = Router();

    constructor(){
        this.router.get('/:query', notesController.search);
        
        this.router.get('/', notesController.findAll);
        // this.router.get('/:id', notesController.showById);
        this.router.post('/', notesController.create);
        this.router.delete('/:id', notesController.delete);
        this.router.put('/:id', notesController.update);

    }
}

export const noteRoutes = new NotesRoutes();
