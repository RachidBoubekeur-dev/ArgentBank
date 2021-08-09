import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../../../services/Axios';
import { profile } from '../../../slices/User';
import './welcomeProfile.css';

/**
 *  WelcomeProfile component smart
 */
export const WelcomeProfile = () => {
    const state = useSelector((state) => state.user);
    const [edit, setEdit] = useState(false);
    const firstName = useRef();
    const lastName = useRef();
    const save = useRef();
    const regex =
        /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/; // eslint-disable-line
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const handleForm = () => {
        firstName.current.value.length >= 3 &&
        firstName.current.value.length <= 15 &&
        regex.test(firstName.current.value)
            ? (firstName.current.style.border = '2px solid green')
            : (firstName.current.style.border = '2px solid red');

        lastName.current.value.length >= 3 &&
        lastName.current.value.length <= 15 &&
        regex.test(lastName.current.value)
            ? (lastName.current.style.border = '2px solid green')
            : (lastName.current.style.border = '2px solid red');

        if (
            firstName.current.value.length >= 3 &&
            firstName.current.value.length <= 15 &&
            regex.test(firstName.current.value) &&
            lastName.current.value.length >= 3 &&
            lastName.current.value.length <= 15 &&
            regex.test(lastName.current.value)
        ) {
            save.current.disabled = false;
            return true;
        } else {
            save.current.disabled = true;
            return false;
        }
    };

    /**
     * we send the new profile data received by API to the profile action to replace the state data.
     */
    const setResponse = (response) => {
        dispatch(profile({ ...response }));
        setEdit(false);
    };

    /**
     * we check that everything is valid and send the data to Axios.
     */
    const submitForm = (e) => {
        e.preventDefault();
        const valid = handleForm();
        if (valid) {
            const dataform = {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
            };
            Axios('update', dataform, state.user.token)
                .then((response) => {
                    setResponse(response);
                })
                .catch(() => setError(true));
        }
    };
    return (
        <div>
            {edit ? (
                <div className="header">
                    <h1>Welcome back</h1>
                    {error && (
                        <p>
                            Whoops !!! a problem occurred please try again
                            later.
                        </p>
                    )}
                    <form
                        onSubmit={submitForm}
                        onChange={handleForm}
                        className="editNameForm"
                    >
                        <input
                            type="text"
                            defaultValue={state.user.firstName}
                            placeholder={state.user.firstName}
                            ref={firstName}
                            className="editInputName"
                            maxLength="15"
                            required
                        />
                        <input
                            type="text"
                            defaultValue={state.user.lastName}
                            placeholder={state.user.lastName}
                            ref={lastName}
                            className="editInputName"
                            maxLength="15"
                            required
                        />
                        <input
                            type="submit"
                            value="Save"
                            disabled={true}
                            ref={save}
                            className="editbtnName"
                        />
                        <input
                            type="button"
                            value="Cancel"
                            onClick={() => setEdit(false)}
                            className="editbtnName"
                        />
                    </form>
                </div>
            ) : (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {`${state.user.firstName} ${state.user.lastName}`}
                    </h1>
                    <button
                        className="edit-button"
                        onClick={() => setEdit(true)}
                    >
                        Edit Name
                    </button>
                </div>
            )}
        </div>
    );
};
