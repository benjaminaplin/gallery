import { Router } from 'express';
import ArtWorksController from '@controllers/artWorks.controller';
import { CreateArtWorkDto } from '@dtos/artWorks.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ArtWorksRoute implements Routes {
  public path = '/artWorks';
  public router = Router();
  public artWorksController = new ArtWorksController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.artWorksController.getArtWorks);
    // this.router.get(`${this.path}/:id(\\d+)`, this.artWorksController.getArtWorkById);
    this.router.post(`${this.path}`, validationMiddleware(CreateArtWorkDto, 'body'), this.artWorksController.createArtWork);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateArtWorkDto, 'body', true), this.artWorksController.updateArtWork);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.artWorksController.deleteArtWork);
  }
}

export default ArtWorksRoute;
