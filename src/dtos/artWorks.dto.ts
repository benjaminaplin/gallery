import { IsString, IsDateString, IsInt } from 'class-validator';

export class CreateArtWorkDto {
  @IsString()
  public title: string;

  @IsString()
  public type: string;

  @IsString()
  public size: string;

  @IsString()
  public description: string;

  @IsInt()
  public price: number;

  @IsDateString()
  public dateOfCompletion: string;
}
