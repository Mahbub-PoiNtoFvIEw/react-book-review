const getReadingBook = ()=>{
    const storedReadingBook = localStorage.getItem('reding books');
    if(storedReadingBook){
        return JSON.parse(storedReadingBook);
    }
    return [];
}

const isReadingExist = (id) =>{
    const storedReadingBooks = getReadingBook();
    const exist = storedReadingBooks.find(bookId => bookId === id);
    return exist;
}

const saveReadingBooks = id =>{
    const storedReadingBooks = getReadingBook();
    const exist = isReadingExist(id);
    if(!exist){
        // localStorage.removeItem('wish books',wishExist);
        storedReadingBooks.push(id)
        localStorage.setItem('reding books', JSON.stringify(storedReadingBooks))
    }
}

const getWishListBook = ()=>{
    const storedWishList = localStorage.getItem('wish books');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}

const isWishExist = (id) =>{
    const storedWishLists = getWishListBook();
    const wishExist = storedWishLists.find(w_bookId => w_bookId === id);
    return wishExist;
}

const saveWishListBooks = id =>{
    const storedWishLists = getWishListBook();
    const readingExist = isReadingExist(id);
    const wishExist = isWishExist(id);
    if(!readingExist && !wishExist){
        storedWishLists.push(id)
        localStorage.setItem('wish books', JSON.stringify(storedWishLists))
    }
}

export {getReadingBook, saveReadingBooks, getWishListBook, saveWishListBooks, isReadingExist, isWishExist};