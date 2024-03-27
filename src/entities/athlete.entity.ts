import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Athlete extends Document {

    
    @Prop({
        type: String,
        index: true,
    })
    name: string;

    @Prop({
        type: String,
        index: true,
    })
    lastName: string;

    @Prop({
        type: String,
        index: true,
    })
    team: string;
    
    @Prop({
        type: String,
    })
    email: string;  

}

export const AthleteSchema = SchemaFactory.createForClass(Athlete);