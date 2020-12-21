# classicalmusic
## A classical music search app to find reviews on NYT


### Katharine Chandler

The purpose of the app is to search for music reviews in the New York Times


This is an app that will search for classical music reviews in the New York Times. You may ask yourself: can’t you just do that on the Web site? But oh no, not really! Have you ever searched for any article at all in the NYT? Good luck with that! My theory is that they have controlled vocabulary problems but that is a bigger fish to fry. In the meantime, this will be a rather simple little interface that will be immensely helpful (I hope!) to quite a few people I know.

### API:

The API I am using is from the NYT: I have saved controlled vocabularies and articles and semantic and books searches in order to retrieve the key (required by the NYT dev site).



### API Snippet:

Here is JSON retrieved from Postman: 
{
    "status": "OK",
    "copyright": "Copyright (c) 2020 The New York Times Company. All Rights Reserved.",
    "response": {
        "docs": [
            {
                "abstract": "The pandemic compressed live music onto screens, and Black Lives Matter protests brought it back to the streets. What will it all look like, and sound like, in 2021?",
                "web_url": "https://www.nytimes.com/2020/12/17/arts/music/jazz-covid-19-black-lives-matter.html",
                "snippet": "The pandemic compressed live music onto screens, and Black Lives Matter protests brought it back to the streets. What will it all look like, and sound like, in 2021?",
                "lead_paragraph": "When concerts and in-person gatherings shut down this spring, livestreamed shows quickly started to feel like a glorified last resort. I found myself avoiding them. But a Facebook video caught my eye one day in June, of the trombonist Craig Harris performing at the Brooklyn Botanic Garden. Accompanied by the keyboardist Pete Drungle, framed by a flowering grove and a trellis, he played “Breathe,” a suite of concise and soothing music that sounds like the sum of Mr. Harris’s experiences on the New York scene since the 1970s.",
                "source": "The New York Times",
                "multimedia": [
                    {
                        "rank": 0,
                        "subtype": "xlarge",
                        "caption": null,
                        "credit": null,
                        "type": "image",
                        "url": "images/2020/12/17/arts/17jazz-essay5/merlin_181290435_8afbf528-d227-4cc5-8a31-73397fd388ff-articleLarge.jpg",
                        "height": 594,
                        "width": 600,
                        "legacy": {
                            "xlarge": "images/2020/12/17/arts/17jazz-essay5/merlin_181290435_8afbf528-d227-4cc5-8a31-73397fd388ff-articleLarge.jpg",
                            "xlargewidth": 600,
                            "xlargeheight": 594
                        },
                        "subType": "xlarge",
                        "crop_name": "articleLarge"
                    },

### Wireframes

Here is a wireframe for this project.

https://wireframepro.mockflow.com/editor.jsp?editor=on&bgcolor=white&perm=Create&ptitle=Classical%20Music%20Reviews%20NYT&category=form&projectid=Me09cbd68b4781cf91c86ec0d9df852bc1608509893174&publicid=c3d90433e60141c6a82a3a59be52b119#/page/35d431a2d0f34a748790716282f96478

### MVP

These are the features needed to meet the Minimum Viable Product:
1. Interactive search feature
2. Lists of results and links to the NYT page
3. Ability to search by relevance
4. (NB: the difficulty of putting together this app will be dealing with the NYT controlled vocabularies, which seem to be problematic)

### Post MVP

Additional feature could include deeper search parameters, other kinds of classical-music-related searches (such as books), videos and picture results

### Goals Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) 

Day 1 (Dec 21): Project pitch due. Evening: Pseudocoding to work out initial code to get event listeners working and retrieve the data from the site.
Day 2 (Dec 22): Pseudocoding: Structure the html, css, and finish any more JS for the site. 
Day 3 (Dec 23): Continue working out css, html, and JS bugs. 
Day 4 (Dec 26): Testing
Day 5 (Dec 27): Hopefully the site will work by this time!
Day 6 (Dec 28): Possible post-MVP options: bring in videos or pictures or recordings

### Track Progress

https://cloudinary.com/console/c-ea108e0825ef68419524c2397bda7f

### Timeframes

Day 1 (Dec 21): Evening: three hours to do pseudocoding and initial trials
Day 2 (Dec 22): Three hours in afternoon.  Three hours in evening. Pseudocoding: Structure the html, css, and finish any more JS for the site. 
Day 3 (Dec 23): Three hours in afternoon. Three hours in evening. Continue working out css, html, and JS bugs. 
Day 4 (Dec 26): Three hours in afternoon. Three hours in evening. Testing
Day 5 (Dec 27): Three hours in afternoon. Three hours in evening. Hopefully the site will work by this time!
Day 6 (Dec 28): Three hours in afternoon. Three hours in evening. Possible post-MVP options: bring in videos or pictures or recordings




