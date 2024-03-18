import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Academy extends Document {

    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: String
    })
    location: string;

    @Prop({
        type:String
    })
    professor: string;

    @Prop({
        type: Number
    })
    phone: number;

}

export const AcademySchema = SchemaFactory.createForClass(Academy);