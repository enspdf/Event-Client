import MessageFormat from 'messageformat';

export default class CustomFormatter {
    constructor (options = {}) {
        this._locale = options.locate || 'es-CO';
        this._formatter = new MessageFormat(this._locale);
        this._formatter.setIntlSupport(true);
        this._caches = Object.create(null);
    };

    interpotale (message, values) {
        let fn = this._caches[message];
        if (!fn) {
            fn = this._formatter.compile(message, this._locale);
            this._caches[message] = fn;
        }

        return [fn(values)];
    };
};