var BaseEntity = require('./BaseEntity');

module.exports = class Star extends BaseEntity {
    constructor(){
        super('Temp star');
        this.Type = null;
        this.System = null;
    }
}
