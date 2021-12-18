var CatEntity = /** @class */ (function () {
    function CatEntity(_a) {
        var info = _a.info, storageArray = _a.storageArray;
        this.info = info;
        this.storageArray = storageArray;
        this._createEntity();
        this.setEntityInteraction;
        this._pushToStorageArray();
    }
    CatEntity.prototype._createEntity = function () {
        try {
            var element = document.createElement('div'), image = document.createElement('img');
            var parent_1;
            if (!document.getElementById(this.info.parentElement)) {
                parent_1 = document.createElement('div');
                parent_1.setAttribute('id', this.info.parentElement);
                document.body.appendChild(parent_1);
            }
            else {
                parent_1 = document.getElementById('parent');
            }
            element.classList.add(this.info.className);
            element.classList.add(this.info.className + "-outline");
            image.setAttribute('src', this.info.pictureFilePath);
            element.setAttribute('id', this.info.name.toLowerCase() + "Id");
            element.appendChild(image);
            parent_1.appendChild(element);
        }
        catch (e) {
            throw new Error('MAoE: Missing Arguments on Entity base class.') && e;
        }
    };
    CatEntity.prototype._setEntitySelection = function (infoContainers) {
        var _this = this;
        var img = document.getElementById(infoContainers.nameContainer);
        var characters = document.querySelectorAll(this.info.className);
        document.getElementById(infoContainers.nameContainer)
            .innerHTML = this.info.name;
        document.getElementById(infoContainers.descriptionContainer)
            .innerHTML = "" + this.info.description;
        document.getElementById(infoContainers.roleContainer)
            .innerHTML = "" + this.info.role;
        document.getElementById(this.info.name.toLowerCase() + "Id")
            .classList.add('active');
        img.setAttribute('src', this.info.pictureFilePath);
        characters.forEach(function (char) {
            if (char.id !== _this.info.name.toLowerCase() + "Id") {
                char.classList.remove('active');
                char.classList.add(_this.info.className + "-outline");
            }
            else {
                char.classList.remove(_this.info.className + "-outline");
            }
        });
    };
    CatEntity.prototype._pushToStorageArray = function () {
        this.storageArray.push(this);
    };
    CatEntity.prototype.setEntityInteraction = function (infoContainers, action) {
        var _this = this;
        try {
            if (!action)
                action = 'click';
            var btn = document.getElementById(this.info.name.toLowerCase() + "Id");
            btn.addEventListener(action, function () {
                _this._setEntitySelection(infoContainers);
            });
        }
        catch (e) {
            throw new Error('You must provide an infoContainer Object') && e;
        }
    };
    return CatEntity;
}());
