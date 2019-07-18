function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setGender = function (isMale) {
        this.gender = isMale;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.eatApple = function () {
        if (apple.weight > 0){
            this.weight ++;
            apple.decrease();
        }
    };
    this.getWeight = function () {
        return this.weight;
    }
}

