import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Academy extends Document {

    @Prop({
        
    })
    name: string;

    @Prop({

    })
    location: string;

    @Prop({

    })
    professor: string;

    @Prop({

    })
    phone: string;

}

export const AcademySchema = SchemaFactory.createForClass(Academy);