var size = 12,
    postDescription= $(".post-description"),
    postText = postDescription.text();

if(postText.length > size){
	postDescription.text(postText.slice(0, size) + '...');
}
