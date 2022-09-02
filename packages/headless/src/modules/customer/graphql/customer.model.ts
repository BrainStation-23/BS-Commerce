import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsOptional } from 'class-validator';
import {
    Customer,
    CustomerAddress,
    CustomerChangePasswordRequest,
    SendOtpRequest,
    UpdateCustomerRequestBody,
} from 'models';

@ObjectType('CustomerAddress')
export class GraphqlCustomerAddress implements CustomerAddress {
    @Field({ nullable: true })
    id?: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    addressLine1: string;

    @Field({ nullable: true })
    addressLine2?: string;

    @Field(() => Boolean, { nullable: true })
    isDefault?: boolean;

    @Field({ nullable: true })
    company?: string;

    @Field({ nullable: true })
    state?: string;

    @Field({ nullable: true })
    country?: string;

    @Field({ nullable: true })
    postCode?: string;

    @Field()
    phone: string;

    @Field()
    tag: string;
}

@InputType()
export class CustomerAddressInput {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    addressLine1: string;

    @Field({ nullable: true })
    addressLine2?: string;

    @Field(() => Boolean, { nullable: true })
    isDefault?: boolean;

    @Field({ nullable: true })
    company?: string;

    @Field({ nullable: true })
    state?: string;

    @Field({ nullable: true })
    country?: string;

    @Field({ nullable: true })
    postCode?: string;

    @Field()
    phone: string;

    @Field()
    tag: string;
}

@ObjectType('Customer')
export class GraphqlCustomer implements Customer {
    @Field()
    id: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    email?: string;

    @Field(() => [GraphqlCustomerAddress], { nullable: true })
    addresses?: GraphqlCustomerAddress[];
}

@InputType()
export class UpdateCustomerInput implements UpdateCustomerRequestBody {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsEmail()
    email?: string;
}

@ObjectType()
export class CustomerChangePasswordSendOTPResponseMessage {
    @Field()
    message: string;
}

@ObjectType()
export class CustomerChangePasswordSendOTPResponse {
    @Field(() => Int)
    code: number

    @Field(() => CustomerChangePasswordSendOTPResponseMessage, { nullable: true })
    data?: CustomerChangePasswordSendOTPResponseMessage
}

@InputType()
export class CustomerChangePasswordSendOTPInput implements SendOtpRequest {
    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsEmail()
    email?: string;
}

@InputType()
export class CustomerChangePasswordInput implements CustomerChangePasswordRequest {
    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsEmail()
    email?: string;

    @Field(() => Int)
    otp: number;

    @Field()
    currentPassword: string;

    @Field()
    newPassword: string;
}

@ObjectType()
export class CustomerResponse {
    @Field(() => Int)
    code: number;

    @Field(() => GraphqlCustomer, { nullable: true })
    data?: GraphqlCustomer;
}

@ObjectType()
export class CustomerChangePasswordResponseMessage {
    @Field()
    message: string;
}

@ObjectType()
export class CustomerChangePasswordResponse {
    @Field(() => Int)
    code: number;

    @Field(() => CustomerChangePasswordResponseMessage, { nullable: true })
    data?: CustomerChangePasswordResponseMessage;
}