import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {

    // id: string;

    @Prop({
        index: true,
        unique: true,
        type: String
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    email: string;

    @Prop({
        index: true,
    })
    passport: string;

    @Prop({
        index: true,
    })
    phone: number;

    @Prop({
        default: true,
    })
    isActive: boolean;

    @Prop({
        type: [String],
        default: ['user'],
    })
    role: string[];

}

export const UserSchema = SchemaFactory.createForClass(User);