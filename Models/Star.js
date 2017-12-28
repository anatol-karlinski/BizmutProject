var BaseEntity = require('./BaseEntity');

module.exports = class Star extends BaseEntity {
    constructor(){
        this.Type = null;
        this.System = null;
        super('Temp star');
    }
}
