import { BadRequestException, InternalServerErrorException } from "@nestjs/common";


export const errorExceptionHandler = (error: any) => {
    const errorsDict = {
        11000: (error) => { throw new BadRequestException('Entity already exists in DB' + JSON.stringify(error.keyValue)) },
    }
    if (errorsDict.hasOwnProperty(error.code)) {
        errorsDict[error.code](error);
    }
    console.log(error);
    throw new InternalServerErrorException(
        'Error processing request - Check server logs' + JSON.stringify(error),
    );
}