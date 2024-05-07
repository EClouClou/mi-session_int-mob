class Star {
    constructor(name, age, color, galaxy, distance) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.galaxie = galaxy;
    this.distance = distance;
    }
    toHtml() {
    //implement me
    const containerHtml = document.createElement('div');
    const nameHtml = document.createElement('p'); 
    const ageHtml = document.createElement('p');
    const colorHtml = document.createElement('p');
    const galaxieHtml = document.createElement('p');
    const distanceHtml = document.createElement('p');

    nameHtml.textContent = 'Nom de l\'étoile : ' + this.name;
    ageHtml.textContent = 'Âge : ' + this.age;
    colorHtml.textContent = 'Couleur : ' + this.color;
    galaxieHtml.textContent = 'Galaxie : ' + this.galaxie;
    distanceHtml.textContent = 'Distante : ' + this.distance;

    containerHtml.appendChild(nameHtml);
    containerHtml.appendChild(ageHtml);
    containerHtml.appendChild(colorHtml);
    containerHtml.appendChild(galaxieHtml);
    containerHtml.appendChild(distanceHtml);
    return containerHtml;
    }
    };

    const stars = [
    new Star(
        "45IR1", 
        690000, 
        "#F4F6F4", 
        "Andromeda", 
        100054
    ),
    new Star(
        "45IR2", 
        680000, 
        "#F4F5F4", 
        "Andromeda", 
        100353
    ),
    new Star(
        "45IR3", 
        670000, 
        "#F4F4F4", 
        "Andromeda", 
        100454
    ),
    new Star(
        "45IR4", 
        660000, 
        "#F4F3F4", 
        "Andromeda", 
        100554
    ),
    new Star(
        "45IR5", 
        650000, 
        "#F4F2F4", 
        "Andromeda", 
        100654
    ),
    new Star(
        "45IR6", 
        640000, 
        "#F4F1F4", 
        "Andromeda", 
        100754
    ),
    new Star(
        "45IR7", 
        630000, 
        "#F4F0F4", 
        "Andromeda", 
        100854
    ),
    ];

    const starContainer = document.querySelector('.star-container');

    stars.forEach(star => {
        starContainer.appendChild(star.toHtml());
    });