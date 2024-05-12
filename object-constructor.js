function Book(title,author,pages,status){
    this.title = title;
    this.author=author;
    this.pages=pages;
    this.status=status;

    this.info = function(){
        console.log(this.title);
        console.log(this.author);
        console.log(this.pages);
        console.log(this.status);
    }


}

