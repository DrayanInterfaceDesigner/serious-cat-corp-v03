export default class Button {
    constructor(id) {
        this.button = document.getElementById(id)
        this.state = false
        this.public = process.env.PUBLIC_URL
    }

    iconToggle(src1 = '', src2 = '', action = 'click') {
        const BTN = this.button
        BTN.addEventListener(action, ()=> {
            if(!this.state) { BTN.src = `${this.public}${src2}`; this.state = true; }
            else { BTN.src = `${this.public}${src1}`; this.state = false }
        })
        return this.button
    }
}