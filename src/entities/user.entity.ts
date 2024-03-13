import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {

    // id: string;
    
    @Prop({
        unique:true,
        index: true,
        type: String
    })
    name: string;

    @Prop({
        unique:true,
        index: true,
    })
    email: string;

    @Prop({
        unique:true,
        index: true,
    })
    phone: number;

}

export const UserSchema = SchemaFactory.createForClass(User);