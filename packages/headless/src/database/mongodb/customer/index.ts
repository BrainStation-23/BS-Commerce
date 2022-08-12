import { Injectable } from '@nestjs/common';
import { Customer, CustomerAddress } from 'src/entity/customer';
import { Otp } from 'src/entity/otp';
import { ICustomerDatabase } from 'src/modules/customer/repositories/customer.database.interface';
import { OtpModel } from '../otp/otp.model';
import { CustomerModel } from './customer.model';
const ONE_HOUR = 60 * 60 * 1000;

@Injectable()
export class CustomerDatabase implements ICustomerDatabase {

  async sendOtp(data: Otp): Promise<Otp | null> {
    return await OtpModel.create(data);
  }

  async verifyOtp(query: Record<string, any>): Promise<Otp | null> {
    const otp = await OtpModel.findOne(query);
    if (otp) await this.updateOtp(query, { otpVerifiedAt: Date.now() + ONE_HOUR, isVerified: true });
    return otp;
  }

  async findOtp(query: Record<string, any>): Promise<Otp | null> {
    return await OtpModel.findOne(query);
  }

  async updateOtp(query: Record<string, any>, data: object): Promise<Otp | null> {
    return await OtpModel.findOneAndUpdate(query, { $set: data });
  }

  async createCustomer(customer: Customer): Promise<Customer | null> {
    const createdCUstomer = await CustomerModel.create(customer);
    const newCustomer = createdCUstomer?.toObject();
    delete newCustomer?.password;
    return newCustomer;
  }

  async findCustomer(query: Record<string, any>): Promise<Customer | null> {
    return CustomerModel.findOne(query).lean().select('-password -otp -otpVerified -_id');
  }

  async getCustomerPassword(query: Record<string, string>): Promise<Customer | null> {
    return await CustomerModel.findOne(query).lean();
  }

  async updateCustomer(customerId: string, customer: Customer): Promise<Customer | null> {
    return await CustomerModel.findOneAndUpdate({ id: customerId }, { $set: customer }, { new: true }).lean().select('-password -otp -otpVerified -_id -resetPasswordToken -resetPasswordExpires').exec();
  }

  async addCustomerNewAddress(customerId: string, address: CustomerAddress): Promise<Customer | null> {
    return await CustomerModel.findOneAndUpdate({ id: customerId }, { $push: { addresses: address } }, { new: true }).lean().select('-password -otp -otpVerified -_id -resetPasswordToken -resetPasswordExpires').exec();
  }

  async updateCustomerAddress(customerId: string, addressId: string, address: CustomerAddress): Promise<Customer | null> {
    return await CustomerModel.findOneAndUpdate({ id: customerId, 'addresses.id': addressId }, { $set: { 'addresses.$': address } }, { new: true }).lean().select('-password -otp -otpVerified -_id -resetPasswordToken -resetPasswordExpires').exec();
  }

  async deleteCustomerAddress(customerId: string, addressId: string): Promise<Customer | null> {
    return await CustomerModel.findOneAndUpdate({ id: customerId, 'addresses.id': addressId }, { $pull: { addresses: { id: addressId } } }, { new: true }).lean().select('-password -otp -otpVerified -_id -resetPasswordToken -resetPasswordExpires').exec();
  }
}