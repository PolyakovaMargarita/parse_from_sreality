import {Request, Response} from 'express';
import {body, validationResult, ValidationChain} from 'express-validator';
import ValidationError from "../exceptions/validation_error";

class ScrapperValidator {
    private validationRules: ValidationChain[] = [];
    private errorMessage: string = 'Every object in the array must have tittle and image_src values';

    constructor() {
    }

    public checkArray(field: string): ScrapperValidator {
        this.validationRules.push(
            body(field)
                .isArray()
                .custom((value: any[]) => {
                    if (!Array.isArray(value)) {
                        return false;
                    }
                    return value.every((item) => item && item.tittle && item.Image_src);
                })
                .withMessage(this.errorMessage)
        );
        return this;
    }

    public validate(req: Request, res: Response) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new ValidationError(errors.array());
        }
    }
}

export default ScrapperValidator;
