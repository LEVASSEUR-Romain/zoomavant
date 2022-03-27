// On aura une class Scroll qui nous permettra de faire des zoom sur une image
// On lui donnera l'id de l'image a zoomer
// On lui donnera la quantité de scroll à faire

class Scroll {
  constructor(id, heightMax) {
    this.id = id;
    this.elementId = document.getElementById(id);
    this.heightMax = heightMax;
    this.ObjectStyle = {};
  }
  setStyle(ObjectStyle) {
    this.ObjectStyle = ObjectStyle;
    const keys = Object.keys(this.ObjectStyle);
    window.addEventListener("scroll", () => {
      this.animationModel(keys);
    });
  }
  animationModel(keys) {
    this.ratio = (window.scrollY / this.heightMax) * 100;
    for (let i = 0; i < keys.length; i++) {
      if (this.ratio >= keys[i] && this.ratio < keys[i + 1]) {
        for (const y in this.ObjectStyle[keys[i]]) {
          if (y != "transform") {
            this.elementId.style[y] = this.ObjectStyle[keys[i]][y];
          } else {
            this.stringTransform = "";
            for (const z in this.ObjectStyle[keys[i]][y]) {
              // verifier si this.ObjectStyle[keys[i + 1]][y][z] existe
              if (
                this.ObjectStyle[keys[i + 1]][y] &&
                this.ObjectStyle[keys[i]][y][z] !==
                  this.ObjectStyle[keys[i + 1]][y][z]
              ) {
                this.value = this.functionAffine(
                  this.ObjectStyle[keys[i + 1]][y][z],
                  this.ObjectStyle[keys[i]][y][z],
                  parseInt(keys[i]),
                  parseInt(keys[i + 1]),
                  this.ratio
                );
              } else {
                this.value = this.ObjectStyle[keys[i]][y][z];
              }
              if (z == "scale") {
                this.stringTransform += z + "(" + this.value + ") ";
              } else {
                this.stringTransform += z + "(" + this.value + "%) ";
              }
            }
            this.elementId.style[y] = this.stringTransform;
          }
        }
      }
    }
  }

  functionAffine(valeurI, valeurF, pourcentF, pourcentI, ratio) {
    const a = (valeurF - valeurI) / (pourcentF - pourcentI);
    const b = valeurI - a * pourcentI;
    return a * ratio + b;
  }
}
