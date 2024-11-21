import {
    EndpointCallInterface,
    EndpointInterface,
    ErrorInterface,
    ModuleServiceInitOptionsInterface,
    ModuleServiceLoginOptionsInterface
} from 'fidj-node';

/**
 * Interface used by all FidjNodeService wrappers (angular.js, angular.io)
 *
 * @see FidjModule
 * @see FidjModule, FidjAngularService
 */
export interface ModuleServiceInterface {

    init(fidjId: string, options?: ModuleServiceInitOptionsInterface): Promise<void | ErrorInterface>;

    login(login: string, password: string): Promise<any | ErrorInterface>;

    loginAsDemo(options?: ModuleServiceLoginOptionsInterface): Promise<any | ErrorInterface>;

    isLoggedIn(): boolean;

    getRoles(): Promise<Array<string>>;

    getEndpoints(): Promise<Array<EndpointInterface>>;

    sendOnEndpoint(input: EndpointCallInterface): Promise<any>;

    forgotPasswordRequest(email: String): Promise<void>;

    getIdToken(): Promise<string | ErrorInterface>;

    getMessage(): Promise<string>;

    logout(force?: boolean): Promise<void | ErrorInterface>;

    sync(fnInitFirstData?: any): Promise<any | ErrorInterface>;

    put(data: any): Promise<any | ErrorInterface>;

    remove(dataId: any): Promise<any | ErrorInterface>;

    find(id: string): Promise<any | ErrorInterface>;

    findAll(): Promise<any | ErrorInterface>;
}
