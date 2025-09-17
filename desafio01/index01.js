class Lanche {
    constructor() {
      this.pao = false;
      this.carne = false;
      this.queijo = false;
      this.salada = false;
      this.molho = false;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho
      });
    }
}
  
class LancheBuilder {
    constructor() {
        this.lanche = new Lanche();
    }

    setPao(tipo) {
        this.lanche.pao = tipo;
        return this;
    }

    setCarne(tipo) {
        this.lanche.carne = tipo;
        return this;
    }

    setQueijo(tipo) {
        this.lanche.queijo = tipo;
        return this;
    }

    setSalada(tipo) {
        this.lanche.salada = tipo;
        return this;
    }

    setMolho(tipo) {
        this.lanche.molho = tipo;
        return this;
    }
}
  
class LanchoneteDirector {
    static lancheSimples() {
      return new LancheBuilder()
        .setPao(true)
        .setCarne(true)
        .build();
    }
  
    static lancheCompleto() {
      return new LancheBuilder()
        .setPao(true)
        .setCarne(true)
        .setQueijo(true)
        .setSalada(true)
        .setMolho(true)
        .build();
    }
}

const lancheSimples = LanchoneteDirector.lancheSimples();
const lancheCompleto = LanchoneteDirector.lancheCompleto();

lancheSimples.show();
lancheCompleto.show();