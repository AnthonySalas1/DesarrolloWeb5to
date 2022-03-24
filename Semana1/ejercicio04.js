const fn4 = () => {
    for (i = 0; i < pelis.length; i++) {
        if (pelis[i].original_language == "en") {
            alert(JSON.stringify(pelis[i].title) +"\n" +JSON.stringify(pelis[i].overview))
        }
    }
}