let resultData = new XMLHttpRequest();
resultData.onload = function(){
    let data = JSON.parse(resultData.responseText);
    
    let dataArticles = data.articles;
    console.log(dataArticles)
    
    let content_some = document.getElementsByClassName("content_some")[0];
    for(let i = 0; i < data.articles.length; i++){
        
        let imageDiv = document.createElement("div");
        imageDiv.id = `imageDiv${i}`;
        imageDiv.className = `imageDiv`;

        let image = document.createElement("img");
        image.id = `image${i}`;

        imageDiv.appendChild(image);




        let newsHeading = document.createElement("div");
        newsHeading .id = `newsHeading${i}`;
        newsHeading.className = `newsHeading`;


        let datePosted = document.createElement("div");
        datePosted.id = `datePosted${i}`;
        datePosted.className = `datePosted`;

        
        let contentText = document.createElement("div");
        contentText.id = `contentText${i}`;
        contentText.className = `contentText`;

        let readMore = document.createElement("div");
        readMore.id = `readMore${i}`;
        readMore.className = `readMore`;

        

        let readMoreLinkTag = document.createElement("a");
        

        readMoreLinkTag.id = `readMoreLink${i}`;
        readMoreLinkTag.className = `readMoreLink`;

        let readMoreText = document.createTextNode("Read more...")


        readMoreLinkTag.append(readMoreText)
        readMore.append(readMoreLinkTag);







        let newDiv = document.createElement("div");
        newDiv.id = `news${i}`;
        newDiv.className = 'news';
        newDiv.appendChild(imageDiv);
        newDiv.appendChild(newsHeading);
        newDiv.appendChild(datePosted);


        newDiv.appendChild(contentText);
        newDiv.appendChild(readMore);


        content_some.appendChild(newDiv);

        document.getElementById(`readMoreLink${i}`).href = data.articles[i].url;
        document.getElementById(`image${i}`).src = data.articles[i].urlToImage;
        document.getElementById(`newsHeading${i}`).innerText = data.articles[i].title;
        document.getElementById(`datePosted${i}`).innerText = data.articles[i].publishedAt;

        

        let currentImage = document.getElementById(`image${i}`);
        let resultDataDiv = document.getElementById(`news${i}`);
        if(data.articles[i].content){
            document.getElementById(`contentText${i}`).innerText = data.articles[i].content.substr(0, 200);
            if ( !currentImage.complete ){
                console.log(currentImage.src);
                resultDataDiv.remove();
            }
           
            if (typeof currentImage.naturalWidth != "undefined" && currentImage.naturalWidth == 0) {
                resultDataDiv.remove();
            }
            
        }
        else{
            if ( !currentImage.complete ){
                console.log(currentImage.src);
                resultDataDiv.remove();
            }
           
            if (typeof currentImage.naturalWidth != "undefined" && currentImage.naturalWidth == 0) {
                resultDataDiv.remove();
            }
            
            
        }
    

    };

};
resultData.open( "GET", "https://newsapi.org/v2/top-headlines?country=ng&apiKey=91386c9e7b2941f0a05dbcd939f18f0f")
resultData.send()