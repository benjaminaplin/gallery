import { NextFunction, Request, Response } from 'express';
import { ArtWork } from '@prisma/client';
import { CreateArtWorkDto } from '@dtos/artWorks.dto';
import artWorkService from '@services/artWorks.service';

class ArtWorksController {
  public artWorkService = new artWorkService();

  public getArtWorks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllArtWorksData: ArtWork[] = await this.artWorkService.findAllArtWork();

      res.status(200).json({ data: findAllArtWorksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  // public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = Number(req.params.id);
  //     const findOneUserData: ArtWork = await this.artWorkService.findUserById(userId);

  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public createArtWork = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const artWorkData: CreateArtWorkDto = req.body;
      const createArtWorkData: ArtWork = await this.artWorkService.createArtWork(artWorkData);

      res.status(201).json({ data: createArtWorkData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  // public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = Number(req.params.id);
  //     const artWorkData: CreateUserDto = req.body;
  //     const updateUserData: ArtWork = await this.artWorkService.updateUser(userId, artWorkData);

  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = Number(req.params.id);
  //     const deleteUserData: ArtWork = await this.artWorkService.deleteUser(userId);

  //     res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default ArtWorksController;
