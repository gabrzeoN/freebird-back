import { jest } from "@jest/globals";
import * as authService from "../../src/services/authService.js";
import {authRepository} from "../../src/repositories/authRepository.js";
import * as authFactory from "../factories/authFactory.js";
import bcrypt from "bcrypt";
import * as err from "../../src/utils/errorUtils.js"

beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});

describe("authService/SignUp test suite", () => {
    it("should create an account", async () => {
        const user = authFactory.signUpInput();
        jest.spyOn(authRepository, 'getUserByEmail').mockImplementationOnce(():any => null);
        jest.spyOn(authRepository, 'getUserByFone').mockImplementationOnce(():any => null);
        jest.spyOn(authRepository, 'insertSignUp').mockImplementationOnce(():any => null);
        const promise = await authService.signUp(user);
        expect(authRepository.insertSignUp).toHaveBeenCalled();
        expect(promise).toStrictEqual(0);
    });

    it("should not create an account with an email already in use", async () => {
        const user = authFactory.signUpInput();
        jest.spyOn(authRepository, 'getUserByEmail').mockImplementationOnce(():any => {return {...user}});
        jest.spyOn(authRepository, 'insertSignUp').mockImplementationOnce(():any => null);
        const promise = authService.signUp(user);
        expect(authRepository.insertSignUp).not.toBeCalled();
        expect(promise).rejects.toEqual({ type: "conflict", message: "This email is already in use!" });
    });

    it("should not create an account with a fone already in use", async () => {
        const user = authFactory.signUpInput();
        jest.spyOn(authRepository, 'getUserByEmail').mockImplementationOnce(():any => null);
        jest.spyOn(authRepository, 'getUserByFone').mockImplementationOnce(():any => {return {...user}});
        jest.spyOn(authRepository, 'insertSignUp').mockImplementationOnce(():any => null);
        const promise = authService.signUp(user);
        expect(authRepository.insertSignUp).not.toBeCalled();
        expect(promise).rejects.toStrictEqual(err.conflictError("This fone is already in use!"));
    });
});

describe("authService/SignIn test suite", () => {
    it("should not login with nonexistent email", async () => {
        const user = authFactory.signInInput();
        jest.spyOn(authRepository, 'getUserByEmail').mockImplementationOnce(():any => null);
        jest.spyOn(authRepository, 'insertSignIn');
        const promise = authService.signIn(user);
        expect(authRepository.insertSignIn).not.toHaveBeenCalled();
        expect(promise).rejects.toEqual(err.unauthorizedError("Incorrect email or password!"))
    });

    it("should not login with wrong password", async () => {
        const user = authFactory.signInInput();
        jest.spyOn(authRepository, 'getUserByEmail').mockImplementationOnce(():any => {
            return {
                ...user
            }
        });
        jest.spyOn(bcrypt, 'compareSync').mockImplementationOnce(():any => false);
        jest.spyOn(authRepository, 'insertSignIn');
        const promise = authService.signIn(user);
        expect(authRepository.insertSignIn).not.toHaveBeenCalled();
        expect(promise).rejects.toEqual(err.unauthorizedError("Incorrect email or password!"))
    });

    it("should login", async () => {
        const user = authFactory.signInInput();
        jest.spyOn(authRepository, 'getUserByEmail').mockImplementationOnce(():any => user);
        jest.spyOn(bcrypt, 'compareSync').mockImplementationOnce(():any => true);
        jest.spyOn(authRepository, 'insertSignIn').mockImplementationOnce(():any => null);
        await authService.signIn(user);
        expect(authRepository.insertSignIn).toHaveBeenCalled();
    });
});