import { PrismaClient, ArtWork } from '@prisma/client';
import { CreateArtWorkDto } from '@dtos/artWorks.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class ArtWorkService {
  public artWorks = new PrismaClient().artWork;

  public async findAllArtWork(): Promise<ArtWork[]> {
    const allArtWork: ArtWork[] = await this.artWorks.findMany();
    return allArtWork;
  }

  // public async findUserById(userId: number): Promise<User> {
  //   if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

  //   const findUser: User = await this.users.findUnique({ where: { id: userId } });
  //   if (!findUser) throw new HttpException(409, "You're not user");

  //   return findUser;
  // }

  public async createArtWork(artWork: CreateArtWorkDto): Promise<ArtWork> {
    if (isEmpty(artWork)) throw new HttpException(400, "You're not artWork");

    const createArtWorkData: ArtWork = await this.artWorks.create({ data: artWork });
    return createArtWorkData;
  }

  // public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
  //   if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  //   const findUser: User = await this.users.findUnique({ where: { id: userId } });
  //   if (!findUser) throw new HttpException(409, "You're not user");

  //   const hashedPassword = await bcrypt.hash(userData.password, 10);
  //   const updateUserData = await this.users.update({ where: { id: userId }, data: { ...userData, password: hashedPassword } });
  //   return updateUserData;
  // }

  // public async deleteUser(userId: number): Promise<User> {
  //   if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

  //   const findUser: User = await this.users.findUnique({ where: { id: userId } });
  //   if (!findUser) throw new HttpException(409, "You're not user");

  //   const deleteUserData = await this.users.delete({ where: { id: userId } });
  //   return deleteUserData;
  // }
}

export default ArtWorkService;
