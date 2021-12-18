import EntityManager from "./classes/EntityManager";
import CardEntity from "./classes/CardEntity";
import JSONcharacters from "../model/characters/json/characters.json"
import Sound from "./classes/Sound";
import Button from "./classes/Button";

function renderEntites () {

    const ENT = JSONcharacters
    const ENTITY_MANAGER = new EntityManager(ENT)
    const HOVER_SOUND = new Sound('/sounds/fx/mouse-on.mp3', {volume: 0.01})
    const CLICK_SOUND = new Sound('/sounds/fx/mouse-click.mp3', {volume: 0.1})
    const MUSIC_TRACK = 
    new Sound('/sounds/soundtrack/music001.mp3', {volume: 0.1, restart: false, isPlaying: false, loop: true})
    
    const GLOBAL_TRACK = new Sound('', {volume: 0.1, restart: false, isPlaying: true})
    

    //Creates the entities in the json file and pushes them to ENTITIES.members()
    ENTITY_MANAGER.getUnits().forEach( entity => {
       const ENTITY_CARD = new CardEntity(entity, ENTITY_MANAGER.getConfig())
       ENTITY_CARD.renderEntity()
       ENTITY_CARD.onClickAction()
       ENTITY_MANAGER.setMember(ENTITY_CARD)
       HOVER_SOUND.onActionPlay('mouseenter', ENTITY_CARD.HTMLentity, true)
       CLICK_SOUND.onActionPlay('click', ENTITY_CARD.HTMLentity, true)
    })

    //Transfer this to a better file
    const MUSIC_BTN = new Button('music-btn')
    .iconToggle('/images/svg/music-off.svg', '/images/svg/music-on.svg', 'click')

    const SOUND_BTN = new Button('sound-btn')
    .iconToggle('/images/svg/sound-on.svg', '/images/svg/sound-off.svg', 'click')

    MUSIC_TRACK.onActionPlay('click', MUSIC_BTN)
    GLOBAL_TRACK.onActionControllGlobally('click', SOUND_BTN)


    SOUND_BTN.addEventListener('click', ()=> {
        MUSIC_BTN.classList.toggle('disabled')
    })

    return ENTITY_MANAGER
}

export default renderEntites