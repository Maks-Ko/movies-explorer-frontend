import React, { useState, useContext, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css'

const validators = {
    userName: {
        required: (value) => { return value === ''; },
        minlength: (value) => { return value.length < 2; },
    },
    email: {
        required: (value) => { return value === ''; },
        isEmail: (value) => { return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value) },
    },
}

function Profile(props) {
    const [formValues, setFormValues] = useState({
        userName: '',
        email: '',
    });

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setFormValues({
            userName: currentUser.name,
            email: currentUser.email,
        });

    }, [currentUser]);

    const [errors, setErrors] = useState({
        userName: {
            required: true,
            minlength: true,
        },
        email: {
            required: true,
            isEmail: true
        },
    });

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }));
    }, [setFormValues]);

    useEffect(function validateInput() {
        const { userName, email } = formValues;

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

        setErrors({
            userName: userNameValidationResalt,
            email: emailValidationResalt,
        });

    }, [formValues, setErrors])

    function handleSubmit(e) {
        e.preventDefault();
        const { userName, email } = formValues;
        props.onUpdateUser({
            name: userName,
            email
        });
    }

    const { userName, email } = formValues;
    const isUserNameInvalid = Object.values(errors.userName).some(Boolean);
    const isEmailInvalid = Object.values(errors.email).some(Boolean);
    const [isCurrentUserInvalid, setIsCurrentUserInvalid] = useState();
    const isSubmitDisabled = isUserNameInvalid || isEmailInvalid || isCurrentUserInvalid;

    useEffect(() => {
        const { userName, email } = formValues;
        if (currentUser.name === userName && currentUser.email === email) {
            setIsCurrentUserInvalid(true);
        } else {
            setIsCurrentUserInvalid(false);
        }
    }, [currentUser, formValues]);

    return (
        <>
            <Header
                loggedIn={props.loggedIn}
                onClickOpenMenu={props.onClickOpenMenu} />
            <main className="account">
                <h2 className="account__title">{`????????????, ${currentUser.name}!`}</h2>
                <form name="account" className="form__account" onSubmit={handleSubmit}>
                    <fieldset className="form__account-container">

                        <span className="form__account-span">??????
                            <input name="userName" value={userName || ''} onChange={handleInputChange} id="user_name" className="form__account-text" type="text" placeholder="?????????????? ??????" requiredminlength="2" maxLength="40" />
                        </span>
                        <div className="form__block-err">
                            {errors.userName.required && <span className="form__text-err">???????????????????????? ????????.</span>}
                            {errors.userName.minlength && <span className="form__text-err">?????????????????????? ???????????? 2 ??????????????.</span>}
                        </div>

                        <hr className="form__account-line" />

                        <span className="form__account-span">E-mail
                            <input name="email" value={email || ''} onChange={handleInputChange} id="email" className="form__account-text" type="email" placeholder="?????????????? E-mail" />
                        </span>
                        <div className="form__block-err">
                            {errors.email.required && <span className="form__text-err">???????????????????????? ????????.</span>}
                            {errors.email.isEmail && <span className="form__text-err">???????????????? ???????????? ??????????.</span>}
                        </div>
                        <div className="form__block-err">
                            {props.errRespons && <span className="form__text-err">???????????????????????? ?? ?????????? email ?????? ????????????????????.</span>}                            
                        </div>

                        <button type="submit" disabled={isSubmitDisabled} className={`form__account-button ${isSubmitDisabled ? 'form__account-button_is-disabled ' : ''}`}>??????????????????????????</button>
                    </fieldset>
                </form>
                <button onClick={props.onLogout} className="account__button">?????????? ???? ????????????????</button>
            </main>
        </>
    )
}

export default Profile;