import React, { useCallback, useEffect, useState } from 'react';
import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css'

const validators = {
    userName: {
        required: (value) => { return value === ''; },
        minlength: (value) => { return value.length < 2; },
    },
    email: {
        required: (value) => { return value === ''; },
        isEmail: (value) => { return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value) },
    },
    password: {
        required: (value) => { return value === ''; },
        minlength: (value) => { return value.length < 10; },
    }
}

function Register(props) {
    const [formValues, setFormValues] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        userName: {
            required: true,
            minlength: true,
        },
        email: {
            required: true,
            isEmail: true
        },
        password: {
            required: true,
            minlength: true
        }
    });

    const [isClickInput, setIsClickInput] = useState({
        userName: false,
        email: false,
        password: false
    });

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }));
    }, [setFormValues]);

    const handleClickInputUserName = () => {
        setIsClickInput({ userName: true });
    };

    const handleClickInputEmail = () => {
        setIsClickInput({ email: true });
    }

    const handleClickInputPassword = () => {
        setIsClickInput({ password: true });
    }

    useEffect(function validateInput() {
        const { userName, email, password } = formValues;

        const userNameValidationResalt = Object.keys(validators.userName).map(
            errorKey => {
                const errorResult = validators.userName[errorKey](userName);

                return { [errorKey]: errorResult }
            }
        ).reduce((acc, el) => ({ ...acc, ...el }), {});

        const emailValidationResalt = Object.keys(validators.email).map(
            errorKey => {
                const errorResult = validators.email[errorKey](email);

                return { [errorKey]: errorResult }
            }
        ).reduce((acc, el) => ({ ...acc, ...el }), {});

        const passwordValidationResalt = Object.keys(validators.password).map(
            errorKey => {
                const errorResult = validators.password[errorKey](password);

                return { [errorKey]: errorResult }
            }
        ).reduce((acc, el) => ({ ...acc, ...el }), {});

        setErrors({
            userName: userNameValidationResalt,
            email: emailValidationResalt,
            password: passwordValidationResalt,
        });

    }, [formValues, setErrors])

    const { userName, email, password } = formValues;
    const isUserNameInvalid = Object.values(errors.userName).some(Boolean);
    const isEmailInvalid = Object.values(errors.email).some(Boolean);
    const isPasswordInvalid = Object.values(errors.password).some(Boolean);
    const isSubmitDisabled = isUserNameInvalid || isEmailInvalid || isPasswordInvalid;

    function handleSubmit(e) {
        e.preventDefault();
        const { userName, email, password } = formValues;
        props.onRegister({ userName, email, password });
    }

    return (
        <>
            <PageWithForm
                title="?????????? ????????????????????!"
                textButton="????????????????????????????????????"
                text="?????? ?????????????????????????????????"
                link="/signin"
                linkText="??????????"
                onSubmit={handleSubmit}
                isSubmitDisabled={isSubmitDisabled}
                isbuttonDisabled={isSubmitDisabled ? "form__button_is-disabled" : ""}
            >
                <span htmlFor="userName" className="form__text-span">??????</span>
                <input id="userName" name="userName" type="text" value={userName || ''} onChange={handleInputChange} onClick={handleClickInputUserName} className="form__text-input" placeholder="??????" requiredminlength="2" maxLength="40" />
                <div className="form__block-errors">
                    {errors.userName.required && isClickInput.userName && <span className="form__text-error">???????????????????????? ????????.</span>}
                    {errors.userName.minlength && isClickInput.userName && <span className="form__text-error">?????????????????????? ???????????? 2 ??????????????.</span>}
                </div>

                <span htmlFor="email" className="form__text-span">E-mail</span>
                <input id="email" name="email" type="email" value={email || ''} onChange={handleInputChange} onClick={handleClickInputEmail} className="form__text-input" placeholder="E-mail" requiredminlength="2" maxLength="40" />
                <div className="form__block-errors">
                    {errors.email.required && isClickInput.email && <span className="form__text-error">???????????????????????? ????????.</span>}
                    {errors.email.isEmail && isClickInput.email && <span className="form__text-error">???????????????? ???????????? ??????????.</span>}
                </div>


                <span htmlFor="password" className="form__text-span">????????????</span>
                <input id="password" name="password" type="password" value={password || ''} onChange={handleInputChange} onClick={handleClickInputPassword} className="form__text-input" placeholder="????????????" requiredminlength="2" maxLength="20" />
                <div className="form__block-errors">
                    {errors.password.required && isClickInput.password && <span className="form__text-error">???????????????????????? ????????.</span>}
                    {errors.password.minlength && isClickInput.password && <span className="form__text-error">?????????????????????? ???????????? 10 ??????????????.</span>}
                </div>

                <div className="form__block-errors_button">
                    {props.errRespons && <span className="form__text-error form__text-error_button">{`${props.errRespons}` === '????????????: 409' ? '???????????????????????? ?? ?????????? email ?????? ????????????????????' : '??????-???? ?????????? ???? ??????, ???????????????????? ???? ??????????'}</span>}
                </div>
            </PageWithForm>
        </>
    )
}

export default Register;