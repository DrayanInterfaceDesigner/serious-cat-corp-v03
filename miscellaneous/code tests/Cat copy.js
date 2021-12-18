class Cat {
    constructor(name, job, classIdentifier, description, pictureFilePath) {
        this.name = name;
        this.job = job;
        this.classIdentifier = classIdentifier;
        this.description = description;
        this.picture = pictureFilePath;
        this.create;
        this.setSelection;
        this.pushTo;
    }

    create(elementType, parentId) {
        const parent = document.getElementById(parentId);
        const element = document.createElement(elementType);
        const image = document.createElement('img');

        element.classList.add(`${this.classIdentifier}`);
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
        document.getElementById(jobDiv).innerHTML = this.job;
        document.getElementById(`${this.name.toLowerCase()}Id`).classList.add('active');
        img.setAttribute('src', this.picture);

        characters.forEach(char => {
        if(char.id !== `${this.name.toLowerCase()}Id`) {
                char.classList.remove('active');
            }
        })
    }
}