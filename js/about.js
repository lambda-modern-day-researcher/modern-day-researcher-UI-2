class Obsj {
    constructor(member) {
        this.member = member;
        this.div = document.querySelectorAll('.more-details');
        this.member.addEventListener('click', this.select.bind(this));
        this.personData = document.querySelectorAll('data-member')
    }

    select() {

    }

}






let details = document.querySelectorAll('.member');
details.forEach(member => {
    return new Obsj(member)
})


