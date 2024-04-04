import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {

    @Prop({
        index: true,
        unique: true,
        type: String
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
        set: value => value.toLowerCase()
    })
    email: string;

    @Prop({
        index: true,
        select: false,
    })
    password: string;

    @Prop({
        index: true,
    })
    phone: number;

    @Prop({
        index: true,
    })
    image: string;

    @Prop({
        default: true,
    })
    isActive: boolean;

    @Prop({
        type: [String],
        default: ['user'],
    })
    roles: string[];

}

export const UserSchema = SchemaFactory.createForClass(User);