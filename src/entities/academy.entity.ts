import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Academy extends Document {

    @Prop({
        type: String,
        index: true,
        unique: true,
    })
    name: string;

    @Prop({
        type: String,
        index: true,
    })
    location: string;

    @Prop({
        type: String,
        index: true,
        unique: true,
    })
    professor: string;

    @Prop({
        type: String,
    })
    phone: string;

}

export const AcademySchema = SchemaFactory.createForClass(Academy);