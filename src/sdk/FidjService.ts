import {Injectable} from '@angular/core';
import {
    EndpointCallInterface,
    EndpointInterface,
    ErrorInterface,
    FidjError,
    FidjNodeService,
    IService,
    LoggerInterface,
    LoggerLevelEnum,
    LoggerService,
    ModuleServiceInitOptionsInterface,
    ModuleServiceLoginOptionsInterface,
} from 'fidj-node';

/**
 * Angular FidjService
 * @see ModuleServiceInterface
 *
 */
@Injectable({
    providedIn: 'root',
})
export class FidjService implements IService {
    private logger: LoggerInterface;
    private fidjService: FidjNodeService;
    private promise: any;

    constructor() {
        this.logger = new LoggerService(LoggerLevelEnum.ERROR);
        this.promise = Promise;
        this.fidjService = null;
        // let pouchdbRequired = PouchDB;
        // pouchdbRequired.error();
    }

    public async init(fidjId: string, options?: ModuleServiceInitOptionsInterface) {
        if (!this.fidjService) {
            this.fidjService = new FidjNodeService(this.logger, this.promise);
        }
        return this.fidjService.init(fidjId, options);
    }

    public async login(login: string, password: string) {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(303, 'fidj.sdk.angular.login : not initialized.')
            );
        }
        return this.fidjService.login(login, password);
    }

    public async loginInDemoMode(options?: ModuleServiceLoginOptionsInterface) {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(303, 'fidj.sdk.angular.loginAsDemo : not initialized.')
            );
        }
        return this.fidjService.loginInDemoMode(options);
    }

    public isLoggedIn() {
        if (!this.fidjService) {
            return false; // this.promise.reject('fidj.sdk.angular.isLoggedIn : not initialized.');
        }
        return this.fidjService.isLoggedIn();
    }

    public needsRefresh() {
        if (!this.fidjService) {
            return true;
        }
        return this.fidjService.needsRefresh();
    }

    public isConnected() {
        if (!this.fidjService) {
            return true;
        }
        return this.fidjService.isConnected();
    }

    public async refresh() {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(401, 'fidj.sdk.angular.sync : not initialized.')
            );
        }
        await this.fidjService.sync({
            forceRefresh: false,
        });
    }

    public async getRoles(): Promise<Array<any>> {
        if (!this.fidjService) {
            return [];
        }
        return await this.fidjService.fidjRoles();
    }

    public async getEndpoints(): Promise<Array<EndpointInterface>> {
        if (!this.fidjService) {
            return [];
        }
        return this.fidjService.fidjGetEndpoints();
    }

    /**
     * @throws {ErrorInterface}
     * @param {EndpointCallInterface} input
     */
    public async sendOnEndpoint(
        input: EndpointCallInterface
    ): Promise<{status: number; data?: any}> {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(303, 'fidj.sdk.angular.loginAsDemo : not initialized.')
            );
        }
        return this.fidjService.sendOnEndpoint(input);
    }

    public async forgotPasswordRequest(email: string) {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(303, 'fidj.sdk.angular.loginAsDemo : not initialized.')
            );
        }
        return this.fidjService.fidjForgotPasswordRequest(email);
    }

    public async getIdToken() {
        if (!this.fidjService) {
            return;
        }
        return this.fidjService.fidjGetIdToken();
    }

    public async getMessage() {
        if (!this.fidjService) {
            return '';
        }
        return this.fidjService.fidjMessage();
    }

    public async logout(force?: boolean) {
        if (!force && !this.fidjService) {
            return this.promise.reject(
                new FidjError(303, 'fidj.sdk.angular.logout : not initialized.')
            );
        }
        return this.fidjService?.logout(force);
    }

    /**
     *
     * Synchronize DB
     * @param fnInitFirstData  a function with db as input and that return promise: call if DB is empty
     * @returns promise with this.session.db
     * @memberof fidj.angularService
     *
     * @example
     *  let initDb = function() {
     *     this.fidjService.put('my first row');
     *  };
     *  this.fidjService.sync(initDb)
     *  .then(user => ...)
     *  .catch(err => ...)
     *
     */
    public async sync(fnInitFirstData?: (a?: any) => Promise<any>) {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(401, 'fidj.sdk.angular.sync : not initialized.')
            );
        }
        return this.fidjService.sync({
            forceRefresh: false,
            fnInitFirstData,
            fnInitFirstData_Arg: this,
        });
    }

    /**
     * Store data in your session
     *
     * @param data to store
     * @returns
     */
    public async put(data: any): Promise<string | ErrorInterface> {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(401, 'fidj.sdk.angular.put : not initialized.')
            );
        }
        return this.fidjService.fidjPutInDb(data);
    }

    /**
     * Find object Id and remove it from your session
     *
     * @param id of object to find and remove
     * @returns
     */
    public async remove(id: string): Promise<void | ErrorInterface> {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(401, 'fidj.sdk.angular.remove : not initialized.')
            );
        }
        return this.fidjService.fidjRemoveInDb(id);
    }

    /**
     * Find
     */
    public async find(id: string): Promise<any | ErrorInterface> {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(401, 'fidj.sdk.angular.find : not initialized.')
            );
        }
        return this.fidjService.fidjFindInDb(id);
    }

    public async findAll(): Promise<any[] | ErrorInterface> {
        if (!this.fidjService) {
            return this.promise.reject(
                new FidjError(401, 'fidj.sdk.angular.findAll : not initialized.')
            );
        }
        return this.fidjService.fidjFindAllInDb();
    }
}
