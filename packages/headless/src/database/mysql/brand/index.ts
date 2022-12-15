/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { IBrandDatabase } from '../../../modules/brands/repositories/brand.database.interface';
import { Brand } from '../../../entity/brand';
import BrandModel from './brand.model';
import InfoModel from './info.model';
import MetaModel from './meta.model';

@Injectable()
export class BrandDatabase implements IBrandDatabase {
  async getAllBrands(skip?: number, limit?: number): Promise<any | null> {
    return await BrandModel.findAll({
      include: [{ all: true, nested: true }],
    });
  }

  async getBrandByName(brandName: string): Promise<any | null> {
    return await InfoModel.findOne({ where: { name: brandName } });
  }

  async getBrandById(brandId: string): Promise<any | null> {
    return await BrandModel.findOne({
      where: { id: brandId },
      include: [{ all: true, nested: true }],
    });
  }

  async addNewBrand(brand: Brand): Promise<any | null> {
    return await BrandModel.create(
      {
        info: brand.info,
        meta: brand.meta,
      },
      { include: [InfoModel, MetaModel] },
    );
  }

  async updateBrandById(brandId: string, brand: Brand): Promise<any | null> {
    let updatedInfo, updatedMeta;
    try {
      updatedInfo = await InfoModel.update(brand.info, { where: { brandId } });
      updatedMeta = await MetaModel.update(brand.meta, { where: { brandId } });
    } catch (err) {
      console.log(err);
    }

    return await BrandModel.findOne({
      where: { id: brandId },
      include: [{ all: true, nested: true }],
    });
  }

  async deleteBrandById(brandId: string): Promise<any | null> {
    let deletedInfo, deletedMeta, deletedId;
    try {
      deletedInfo = await InfoModel.destroy({ where: { brandId } });
      deletedMeta = await MetaModel.destroy({ where: { brandId } });
      deletedId = await BrandModel.destroy({ where: { id: brandId } });
    } catch (err) {
      console.log(err);
    }
    return null;
  }
}
