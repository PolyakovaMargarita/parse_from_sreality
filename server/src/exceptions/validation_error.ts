class ValidationError extends Error {
    get errors(): any[] {
        return this._errors;
    }

    private _errors: any[];

    constructor(errors: any[]) {
        super('Validation Error');
        this.name = 'ValidationError';
        this._errors = errors;
    }
}

export default ValidationError;