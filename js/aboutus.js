let aboutwindow = document.getElementById("windowAbout");

let src = ['https://www.youtube.com/embed/YWuKRlQNUDw','file:///C:/Users/alibi/Desktop/fullstack/myproject1/img/portfolio2.jpg','file:///C:/Users/alibi/Desktop/fullstack/myproject1/img/portfolio3.jpg'];

let frame = document.getElementById("iframeid");

function openAboutwindow(){
    aboutwindow.classList.add("open-window");
}
function closeAboutwindow(){
    aboutwindow.classList.remove("open-window");
}

function prevAboutwindow(){
    let current = 0;
    for(i=0;i<src.length;i++){
        if(frame.src==src[i]){
            current = i;
        }
    }
    if(current==0){
        frame.src = src[2];
        console.log(current);
    }else{
        frame.src=src[current-1];
        console.log(current);
    }
}
function nextAboutwindow(){
    let current = 0;
    for(i=0;i<src.length;i++){
        if(frame.src==src[i]){
            current = i;
        }
    }
    if(current==2){
        frame.src = src[0];
    }else{
        frame.src=src[current+1];
    }
}

