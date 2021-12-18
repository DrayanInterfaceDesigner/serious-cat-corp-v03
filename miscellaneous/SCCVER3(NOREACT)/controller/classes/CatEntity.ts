interface CatEntityData {
    info: {
        name: string, 
        role: string, 
        description: string, 
        className: string, 
        pictureFilePath: string,
        parentElement?: string
    }
    storageArray: object[]
}

interface CatEntity extends CatEntityData {}

class CatEntity {

    constructor({info, storageArray}: CatEntityData)
    {
        this.info = info
        this.storageArray = storageArray
        this._createEntity()
        this.setEntityInteraction
        this._pushToStorageArray()
    }

    private _createEntity() {
        try {

            const element = document.createElement('div'),
            image = document.createElement('img')
            let parent
            
            if(!document.getElementById(this.info.parentElement)) {
                parent = document.createElement('div')
                parent.setAttribute('id', this.info.parentElement)
                document.body.appendChild(parent)
            }
            else {
                parent = document.getElementById('parent')
            }

            element.classList.add(this.info.className)
            element.classList.add(`${this.info.className}-outline`)
            image.setAttribute('src', this.info.pictureFilePath)
            element.setAttribute('id', `${this.info.name.toLowerCase()}Id`)
    
            element.appendChild(image)
            parent.appendChild(element)
            
        }
        catch(e) {
            throw new Error('MAoE: Missing Arguments on Entity base class.') && e
        }
    }

    private _setEntitySelection(infoContainers)
    {

        const img = document.getElementById(infoContainers.nameContainer)
        const characters = document.querySelectorAll(this.info.className)
        
        document.getElementById(infoContainers.nameContainer)
        .innerHTML = this.info.name

        document.getElementById(infoContainers.descriptionContainer)
        .innerHTML = `${this.info.description}`

        document.getElementById(infoContainers.roleContainer)
        .innerHTML = `${this.info.role}`

        document.getElementById(`${this.info.name.toLowerCase()}Id`)
        .classList.add('active')

        img.setAttribute('src', this.info.pictureFilePath)

        characters.forEach(char => {
            if(char.id !== `${this.info.name.toLowerCase()}Id`) {
                    char.classList.remove('active')
                    char.classList.add(`${this.info.className}-outline`)
                }
            else {
                char.classList.remove(`${this.info.className}-outline`)
            }
        })
    }

    private _pushToStorageArray() {
       try{ this.storageArray.push(this) }
       catch(err) { return err }
    }

    public setEntityInteraction(infoContainers: {
        nameContainer: string,
        roleContainer: string,
        descriptionContainer: string,
        imgContainer: string 
    }, action?: string )
    {
        try {
            if(!action) action = 'click'
            const btn = document.getElementById(`${this.info.name.toLowerCase()}Id`)
            btn.addEventListener(action, ()=> {
                this._setEntitySelection(infoContainers)
            })
        }
        catch(e) {
            throw new Error('You must provide an infoContainer Object') && e
        }
    }
} 

export default {CatEntity}
