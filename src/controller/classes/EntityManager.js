export default class EntityManager {
    constructor(jsonFile) {
        this.json = jsonFile
        this.members = []
    }

    getConfig() {
        const CONFIG = this.json.config
        return CONFIG
    }

    getDOC() {
        const DOC = this.json
        return DOC
    }

    getUnits() { 
        const UNITS = this.json.units 
        return UNITS
    }

    //Returns the unit object (entity on json file) 
    getEntity(name) {
        const ENTITY = this.getUnits().filter(unit => { return unit.name === name }).pop()
        return ENTITY
    }

    //SET ONLY ***INSTANCES*** as members (now TS would be nice)
    setMember(object) {
        if(typeof object !== 'object') return
        return this.members.push(object)
    }
    
    //Returns the instance
    getMember(nameOrIndex) {
        if(typeof nameOrIndex == 'string') {
            return this.members
            .filter(member => { return member.name === nameOrIndex })
            .pop()
        }
        if(typeof nameOrIndex == 'number') {
            return this.members[nameOrIndex]
        } 
    }

    //Removes an instance from members'list
    unsetMember(name) {
        if(typeof name == 'string') {
            return this.members = this.members.filter(member => {
                return member.name !== name
            })
        }
        else return undefined
    }
}