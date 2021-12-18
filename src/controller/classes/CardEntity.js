/* eslint-disable no-unused-expressions */
export default class CardEntity {
    constructor(entity, config) {
        //ENTITY PROPERTIES
        this.entity = entity
        this.name = this.entity.name
        this.description = this.entity.description
        this.role = this.entity.role
        this.className = this.entity.className
        this.pictureFilePath = `${process.env.PUBLIC_URL}${this.entity.pictureFilePath}`

        //CONFIG PROPERTIES
        this.config = config
        this.nameBox = this.config.nameBox
        this.descriptionBox = this.config.descriptionBox
        this.roleBox = this.config.roleBox
        this.entityDisplayBox = this.config.entityDisplayBox
        this.parentElement = this.config.parentElement
        this.HTMLentity;
        this.renderEntity
        this.onClickAction
    }

    renderEntity() {
        const ELEMENT = document.createElement('div')
        const IMAGE = document.createElement('img')
        const PARENT = document.getElementById(this.parentElement)
        
        ELEMENT.classList.add(`${this.className}`)
        ELEMENT.classList.add(`${this.className}-outline`)
        IMAGE.setAttribute('src', this.pictureFilePath)
        ELEMENT.setAttribute('id', `${this.name.toLowerCase()}Id`)
    
        ELEMENT.appendChild(IMAGE)
        PARENT.appendChild(ELEMENT)
        this.HTMLentity = ELEMENT
    }

    selectEntity() {

        const ENTITIES = document.querySelectorAll(`.${this.className}`)

        function changeInnerHTML(id, value) {
            document.getElementById(id).innerHTML = value;
        }

        //Set Entity's info
        changeInnerHTML(this.nameBox, this.name)
        changeInnerHTML(this.descriptionBox, `"${this.description}"`)
        changeInnerHTML(this.roleBox, this.role)

        //Set EntityDisplay's image.
        document.getElementById(this.entityDisplayBox)
        .setAttribute('src', this.pictureFilePath)

        //Turns the entity on  ( ͡° ͜ʖ ͡°)
        this.HTMLentity.classList.add('active');

        //Removes another's 'active' state and removes the outline(blue) for the entity.
        ENTITIES.forEach( entry => {
            if(entry.id !== `${this.name.toLowerCase()}Id`) {
                entry.classList.remove('active');
                entry.classList.add(`${this.className}-outline`);
            }
            else { entry.classList.remove(`${this.className}-outline`); }
        })
    }

    onClickAction() { this.HTMLentity.addEventListener("click", ()=> {this.selectEntity()}) }

    //Removes the EntityCard from the DOM, and clears it from the holderInstance
    removeEntityCard(holderInstance, name) {
        const ENTITY = holderInstance.getMember(name)
        document.getElementById(this.parentElement).removeChild(ENTITY.HTMLentity)
        holderInstance.unsetMember(name)
    }
}