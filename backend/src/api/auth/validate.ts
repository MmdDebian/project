import { check, ValidationChain } from 'express-validator';


function phoneLogin_validate():ValidationChain[]{
    return [
        check('phone')
            .notEmpty().withMessage('phone number is required')
            .isLength({max : 11 , min:11}).withMessage('The phone number cannot be greater or less than 11')
    ]
}