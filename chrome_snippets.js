/* To use:
1. Open your browser.
2. Navigate to the facebook page of interest.
3. Open developer tools.
4. Paste the following code into the console.
5. Wait until you're happy with the number of posts that have been loaded.
6. Type stopAndCollate(); into the console.
7. Copy the results for use elsewhere.
*/

// Scroll down over time, to force facebook to load new content
var scrollPos=0;
var autoScrollerHandle = setInterval(()=>{
    window.scrollTo(0,scrollPos+=1000)
},1000);

function stopAndCollate(){
    // stop the auto scroller
    clearInterval(autoScrollerHandle);
    // expand all hidden content (may take some time)
    $$(".see_more_link_inner").map(i=>i.click());
    // get inner text of all posts
    $$(".userContent").map(i=>i.innerText);
}
