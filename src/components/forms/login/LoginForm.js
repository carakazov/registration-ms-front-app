import {useState} from "react";
import {login} from "../../../api/authApi";
import {setData} from "../../../tokenholder/tokenHolder";
import {useTranslation} from "react-i18next";
import {Navigate} from "react-router";
import {LIST_ROUTE} from "../../../constants/routes";
import {
    button, buttonsBlockStyle,
    errorFormStyle,
    fieldsStyle,
    fieldStyle,
    formStyle, formWholeDivStyle,
    inputDivStyle,
    label,
    textInput,
    validationError
} from "./styles"
import { Form } from 'react-js-forms-library/dist/esm'
import { Fields } from "react-js-forms-library/dist/esm";
import { Field } from "react-js-forms-library/dist/esm";
import { Label } from "react-js-forms-library/dist/esm";
import { TextInput } from "react-js-forms-library/dist/esm";
import { createValidationObject } from "react-js-forms-library/dist/esm";
import {notEmptyValidation} from "../../../validation/textValidation";
import { Buttons } from "react-js-forms-library/dist/esm";
import { Button } from "react-js-forms-library/dist/esm";
import { FormException } from "react-js-forms-library/dist/esm";


export default function LoginForm() {
    const [isAuthed, hasAuthed] = useState(false)
    const {t} = useTranslation()

    async function logIn(params) {
        await login(params)
            .then(result => {
                setData(params.login, params.password, result.access_token, result.expires_in)
                hasAuthed(true)
            })
            .catch(reject => {
                if(reject === 401) {
                    throw new FormException(t('errors.wrongCredentials'))
                }
                throw new FormException(t('errors.serverException'))
            })
    }

    if(isAuthed) {
        return <Navigate to={LIST_ROUTE}/>
    }

    return(
        <Form style={formStyle} errorStyle={errorFormStyle} divStyle={formWholeDivStyle}>
            <Fields style={fieldsStyle}>
                <Field style={fieldStyle}>
                    <Label text={t('labels.login')} style={label}/>
                    <TextInput name={'login'} placeholder={'test-user'} type={'text'} fieldStyle={textInput} blockStyle={inputDivStyle} validations={
                        [createValidationObject(t('errors.itIsRequiredField'), validationError, notEmptyValidation)]
                    }/>
                </Field>
                <Field style={fieldStyle}>
                    <Label text={t('labels.password')} style={label}/>
                    <TextInput name={'password'} type={'password'} fieldStyle={textInput} blockStyle={inputDivStyle} validations={
                        [createValidationObject(t('errors.itIsRequiredField'), validationError, notEmptyValidation)]
                    }/>
                </Field>
            </Fields>
            <Buttons style={buttonsBlockStyle}>
                <Button name={'loginButton'} text={t('buttons.login')} style={button} buttonFunc={logIn}/>
            </Buttons>
        </Form>
    )
}