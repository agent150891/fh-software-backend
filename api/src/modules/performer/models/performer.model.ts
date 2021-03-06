import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { ISchedule } from '../dtos';
import { BankingModel } from './banking.model';
import { PaymentGatewaySettingModel } from './payment-gateway-setting.model';
export class PerformerModel extends Document {
  name?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  phone?: string;
  phoneCode?: string; // international code prefix
  avatarId?: ObjectId;
  avatarPath?: string;
  coverId?: ObjectId;
  coverPath?: string;
  idVerificationId?: ObjectId;
  documentVerificationId?: ObjectId;
  verifiedEmail?: boolean;
  gender?: string;
  country?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  address?: string;
  languages?: string[];
  schedule?: ISchedule;
  timezone?: string;
  noteForUser?: string;
  studioId?: ObjectId;
  height?: string;
  weight?: string;
  bio?: string;
  eyes?: string;
  sexualPreference?: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  stats?: {
    likes: number;
    subscribers: number;
    views: number;
    totalVideos: number;
    totalPhotos: number;
    totalGalleries: number;
    totalProducts: number;
  };
  bankingInfomation?: BankingModel;
  ccbillSetting?: PaymentGatewaySettingModel;
  // score custom from other info like likes, subscribes, views....
  score?: number;
  age?: Date;
  createdBy?: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  isOnline?: boolean;
  onlineAt?: Date;
  offlineAt?: Date;
  welcomeVideoId?: ObjectId;
  welcomeVideoPath?: string;
  activateWelcomeVideo?: boolean;
  status?: string;
  storeSwitch?: boolean;
  subsribeSwitch?: boolean;
  freeSubsribeSwitch?: boolean;
  feature?: boolean;
  enableChat?: boolean;
  enableWelcomeMessage?: boolean;
  welcomeImgPath?: string;
  welcomeMessage?: string;
  welcomeImgfileId?: ObjectId;
  welcomeMessageVideoPath?: string;
  welcomeMessageMimeType?: string;
  welcomeMessageVideoId?: ObjectId;
  quote?: string;
}
