export var SOUNDS_GLOBAL = new Map()

export default class Sound {
    constructor(publicTrack, config = {}) {
        this.sound = new Audio(`${process.env.PUBLIC_URL}${publicTrack}`)
        this.path = publicTrack
        this.name = ''
        this.isPlaying = false
        this.isPlaying_HOLDER = this.isPlaying
        this.disabled = false
        this.config = config
        this.default = {volume: 1, loop: false, autoplay: false, currentTime: 0, restart: true, isPlaying: false}
        this._setConfig()
        this._cutFileName()
        this._setMap()
    }

    // Returns the current configuration
    _setConfig() {
        //fix this later fix what lmao???
        // this.config = this.default

        // let _volume

        let findAndSet = () => {

            const CONFIG = this.config
            this.config = this.default

            for(let prop in this.config) {
                if(CONFIG.hasOwnProperty(prop)) {
                    this.config[prop] = CONFIG[prop]
                }
                else this.config[prop] = this.default[prop]
            }

            console.log(this.config)
        }

        findAndSet()

        this.isPlaying = this.config.isPlaying || this.default.isPlaying
        if(this.config.autoplay) this.isPlaying = this.config.autoplay

        this.sound.volume = !this.config.volume ? this.default.volume : this.config.volume
        this.sound.loop = !this.config.loop ? this.default.loop : this.config.loop//this.config.loop || this.default.loop
        this.sound.autoplay = !this.config.autoplay ? this.default.autoplay : this.config.autoplay
        this.sound.currentTime = !this.config.currentTime ? this.default.currentTime : this.config.currentTime
        if(this.config.restart === undefined) this.config.restart = this.default.restart

        console.log(this.sound.volume, this.config.volume, this.default.volume)
        console.log(this.config.autoplay)
        if(this.config.autoplay === false) console.log('hi')
        
        return this.config
    }

    _muteGlobally() {
        //WIP PLACEHOLDER, THE PROBLEMS ARE ABOVE
        SOUNDS_GLOBAL.forEach(sound => {
            sound.sound.volume = 0
        })
    }

    _cutFileName() {
        this.name = this.path.split('/').pop().split('.').splice(0, 1).pop()
        return null
    }

    _setMap() {
        SOUNDS_GLOBAL.set(this.name, {sound: this.sound, volume: this.config.volume})
        console.log(SOUNDS_GLOBAL)
        return null
    }

    _onActionStopGlobally() {

        SOUNDS_GLOBAL.forEach(sound => {
                // sound.sound.pause()
                // sound.sound.currentTime = 0
                sound.sound.volume = 0
        })

    }

    _onActionActivateGlobally() {

        SOUNDS_GLOBAL.forEach(sound => {
            sound.sound.volume = sound.volume
        })
    }

    //Something reaaaally wrong is happening with the boolean
    onActionControllGlobally(action, target = document.body) {
        const TARGET = target
        // this._muteGlobally()
        
        TARGET.addEventListener(action, ()=> {
            
            console.log(SOUNDS_GLOBAL)
            if(this.isPlaying) {
                this._onActionStopGlobally()
                this.isPlaying = false
            }
            else {
                this._onActionActivateGlobally()
                this.isPlaying = true
            }
            console.log(this.isPlaying, this.isPlaying_HOLDER)
        })

    }

    // Returns whetever if the sound is playing or not
    onActionPlay(action, target = document.body, stopSttager = false) {

        const TARGET = target
        TARGET.addEventListener(action, () => {
            if(this.disabled) return
            if(this.sound.paused) { this.sound.play(); this.isPlaying = true }
            else {
                //Sound restarts instead of pause
                if(this.config.restart) {
                    this.sound.currentTime = 0;
                }
                //TURN ON IF THE STTAGERING IS TOO MUCH
                if(!stopSttager) {
                    this.sound.pause()
                    this.isPlaying = false

                } else { if (this.sound.ended) this.isPlaying = false }
            }
            return this.isPlaying
        })
        return this.isPlaying
    }
}