class Obsj{
    constructor(element){
    this.element = element;
    this.div = document.querySelectorAll('.more-details');
    this.element.addEventListener('click', this.select.bind(this));
    }
    
    select(){
      return console.log('working');
    }

}






let details = document.querySelectorAll('.member');
details.forEach(element => {
    return new Obsj(element)
})

