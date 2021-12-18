class Cat {
    constructor(name, job, classIdentifier, description, pictureFilePath, catCounterArray) {
        this.name = name;
        this.job = job;
        this.classIdentifier = classIdentifier;
        this.description = description;
        this.picture = pictureFilePath;
        this.catCounterArray = catCounterArray;
        this.create();
        this.setSelection;
        this.initialize;
        this.pushTo();
    }

    create() {
        let parent;

        if(!document.getElementById('parent')) {
            parent = document.createElement('div');
            parent.setAttribute('id', 'parent');
            document.body.appendChild(parent);
        }
        else {
            parent = document.getElementById('parent');
        }

        const element = document.createElement('div');
        const image = document.createElement('img');


        element.classList.add(`${this.classIdentifier}`);
        element.classList.add(`${this.classIdentifier}-outline`);
        image.setAttribute('src', this.picture);
        element.setAttribute('id', `${this.name.toLowerCase()}Id`);

        element.appendChild(image);
        parent.appendChild(element);
    }

    setSelection(nameDiv, descriptionDiv, jobDiv, imgDiv) {
        
        const img = document.getElementById(imgDiv);
        const characters = document.querySelectorAll(`.${this.classIdentifier}`);
        
        document.getElementById(nameDiv).innerHTML = this.name;
        document.getElementById(descriptionDiv).innerHTML = `"${this.description}"`;
        document.getElementById(jobDiv).innerHTML = `${this.job}`;
        document.getElementById(`${this.name.toLowerCase()}Id`).classList.add('active');
        img.setAttribute('src', this.picture);

        characters.forEach(char => {
        if(char.id !== `${this.name.toLowerCase()}Id`) {
                char.classList.remove('active');
                char.classList.add(`${this.classIdentifier}-outline`);
            }
        else {
            char.classList.remove(`${this.classIdentifier}-outline`);
        }
        })
    }

    initialize(nameDiv, descriptionDiv, jobDiv, imgDiv){
        const btn = document.getElementById(this.name.toLowerCase() +'Id');
        btn.addEventListener("click", ()=> {
            this.setSelection(nameDiv, descriptionDiv, jobDiv, imgDiv);
        })
    }

    pushTo() {
       this.catCounterArray.push(this);
    }
}