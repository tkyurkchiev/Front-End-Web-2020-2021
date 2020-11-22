function getCount(sColor1,sColor2) {
    const tags = document.getElementsByTagName('p');
    const tagCount = document.getElementsByTagName('p').length;
    
    for (let i = 0; i < tagCount; i++) {
        tags[i].style.backgroundColor = sColor1;
        
    }

    const classes = document.getElementsByClassName('headertitle');
    const classCount = document.getElementsByClassName('headertitle').length;

    for (let j = 0; j < classCount; j++) {
        classes[j].style.backgroundColor = sColor2;
        
    }
    console.log(tagCount);
    console.log(classCount);
}

getCount('blue','purple');