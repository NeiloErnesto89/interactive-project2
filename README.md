# **Interactive Frontend Milestone Project II**

## Project Title:  *[EU Pollution Index ](https://neiloernesto89.github.io/interactive-project2/)* 
#### **_A site aimed at showcasing visualised data via responsive charts based on pollution levels in the EU._**


### Design brief:

My aim of this project was to provide a simple and user friendly visualisation of data for the user to compare and contrast the 28countries within the European Union based on a small range of different criteria.

I wanted to build a frontend interactive site, based on a topic that I'm very interested in and that would naturally allow me to utilise the skills I've acquired during the course. My aim was that the site would be easy to digest from the User's perspective, simple to navigate and also educational on this topic. 

Using Co2 emission levels, which are used as the main pollution indicator, I also took GDP, Plastic Waste Generation per country/capita, annual death rate caused by air pollution. I had previously used a similar index on the website [Numbeo](https://https://www.numbeo.com/pollution/comparison.jsp), where the user could gauge different cities from around the world against one another based on a number of factors, for example:  Ireland v  Germany on air pollution levels. Obviously due to nature and size of countries it's not as accurate as a city-based pollution index, howeve,r I think the EU 28 nations are an interesting dataset due to the diverse nation within the EU. 
 
I felt this was a fun, interesting and very educational way to informing the user of the different ecological situations within the EU. So the tool is not only enjoyable but has the added benefit of showcasing to the user some important data.
 
### UX:
 

Using the skills I had garnered from my last project, I felt I should continue along with a similar layout for the UX. My focus was on usability, with a simple and effcient design. 

Like my first milestone project, the aim of the UX on this site is to make it as simple, legible and efficent for the user as possible. Data visualisation is a great way to make a chunk of numerical data more interesting, so I wanted the UX to be straightforward. I also wanted the data to be presented in an enjoyable manner, despite, what is in actual fact, a bit of a morbid subject. 

My user type ideally will be curious and will follow the simple narrative of the site. As per requirments, it's a 1 page site and the data/graphs are presented in a loosely decending order. I placed what I felt to be the more pertient graphs towards to the top of the page with accompanying information. The aim being that the Users interest will be piqued by the facts presented and along with the simple ux will encourage the User to continue scrolling to learn more.  


### User Story: 

*The following are some of the potential users/user stories:*

1. *"I'm interested in environmental issues and I would like to learn more".*

2. *"I would like to learn more about pollution and it's impact on societies".*

3. *"I'm not at concerned with the enviroment but I'm a fan of geography and random data".*

4. *"I'm from a European country and I want to know how my nation does in terms of GDP, waste (plastic) and Co2 emissions as well as mortality rates from air pollution".*


### *Wireframes*

The following section contains the mockups/wireframes  that I created prior to actually starting to code my project. The goal to give myself an idea of where I wanted the site to go and how it wanted to look, as well as tentatively considering some of its functionality.

I used [Balsamiq](https://balsamiq.com/) to create simple wireframe mockups, which allowed me to visually render the inital outline for the site. I focused solely on a desktop view:


#### Wireframe 1


![Wireframe 1 ](https://github.com/NeiloErnesto89/interactive-project2/blob/master/images/wireframe1.jpg "Inital Wireframe ")
*Figure 1. Inital Wireframe*


*Wireframe 1* was my very first wireframe, I changed a couple of points to keep the grid/charts simple and visible.


#### Wireframe 2


![Wireframe 2 ](https://github.com/NeiloErnesto89/interactive-project2/blob/master/images/wireframe2.jpg "Country Comparison Wireframe ")
*Figure 2. Country Comparison*


*Wireframe 2* was an idea I really considered at the beginning but veered away from as so to stick with project requirements. It's a simple country comparator (as mentioned earlier, the idea coming from the site [Numbeo](https://https://www.numbeo.com/pollution/comparison.jsp)). It's a tool I really appreciate and I discuss this topic further in the *"Features Left to Implement"* section underneath.


#### Wireframe 3


![Wireframe 2 ](https://github.com/NeiloErnesto89/interactive-project2/blob/master/images/wireframe3.jpg "Settled on Wireframe ")
*Figure 3. Main Wireframe*

This wireframe, Figure 3, is a simplied version of my intital wireframe, Figure 1, which I adapted to keep it visually appeasing. I focused a bit more on the UX by having the charts at maximum of 2, side by side. It's very similar to the final page.


## Features:

### Existing Features:

The following features are presenting in a loose order of appearance: 

- A Modal Popup with a welcome message: Just a simple popup with to welcome visitor to the site and to give further explaination.
- A Tooltip Icon (beside the close button) in the modal footer: This is to give the User a more information where needed. 
- The EU in Numbers Box: To give the user quick, numerical data on the size of the population(s) in the EU and the total level of Co2 Emissions. The numbers adjust depending on the users selection(s). 
- A "Select All" Selector: Underneath the numbers box, is a simple but powerful function with allows the user to chose a country which automatically updates all the charts to show the selected nation's data. 
- A Fixed 'Reset Button': Placed in the bottom right of the screen, the user can simply click to refresh any of the charts statisitcs. It also has a simple tooltip to give further explaination.
- EU Nations Barchart to show the differing levels of Co2 emssions per state. 
- An EU Emission Piechart follows to give another view of the statistics with a legened and cap (as not to be too much visually), which shows that well over 50% of the emissions in the EU come from just 5 nations.
- Following the piechart is a Per Capita Emissions Chart, which gave a more nuanced insighted into the pollution levels per capita with the 28 nations. 
- The (Death v GDP) Scatterplot: I found this chart to be the most asthetically pleasing visualisation, demonstrating the loose correaltion between higher GDP and lower mortality rates due to air pollution and vise versa. This chart is perhaps the least interative chart but still can be adapted using the "Select all" selector. 
- Waste Generation v GDP Graph: This chart is a line graph, guaging the levels of plastic waste generation per capita against the GDP levels. This chart has a brush function, which allows the user to select a range on the graph.
- Plastic Waste Generation Piechart: This pie chart shows the main nations and their citizens plastic waste generation levels per annum. 
- The '+-50kgs' Piechart split: This simple chart just shows the split of nations with citizens who produce either more or less than 50kgs of plastic waste per annum, along with the percentage of the total plastic waste level. 
- Row Chart: This chart renders the same data of the Plastic Waste Generation Pie Chart, but in another form which aids the visual experience for the user. 

### Features Left to Implement


- Probably the most enjoyable part of this project was the amount of ideas I had for adding more graphs, as well as more robust datasets and information to the site. The options are endless. I had to keep it realtively simple so as not to go overboard but I feel that among other features, the following would have been ideal:

- In particular, as I mentioned in the opening section of the readMe, a site that I really enjoy is [Numbeo](https://https://www.numbeo.com) and in particular their pollution comparison tool. I think it's a brilliant application that gives the user endlessly interesting and information. For example, the user could evalute the differences between Dublin (Ireland) and Lagos (Nigeria), comparing pollution levels, cost of living, crime etc. This would be something I would love to develop for my site and I will definitely be attempting once I've got some free time.  
 
-  Also, I felt that a GeoJson-Choropleth Map would be a really aesthetically rich, helpful and user friendly chart to add. 

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

The following technologies were used on this project:

##### Languages

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - is the renowned programming scripting language and all libraries are JS. 
- [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3) - is used as the stylesheet language for styling and rendering.
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - is used as the standard markup language. 
    
##### Framework 

- [Bootstrap 4.3.1](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - is a CSS framework that aids the grid and the layout including the modal popup in this project.


##### Libraries


-  [JQuery version 3.3.1](https://jquery.com) - JS library to simplify HTML DOM manipulation and is used for the popup modal. 
-  [Crossfilter version 1.3.12](https://square.github.io/crossfilter/) - a JS library which supports large quantity datasets in browsers.
-  [Dc.js version 2.1.8](https://dc-js.github.io/dc.js/) - JS charting library which uses d3 to allow for "CSS-friendly" charts
-  [D3.js version 3.5.17](https://d3js.org/) - JS library for maniplating data and uses HTML, CSS and SVG in tandem to visually activate the data/charts.
-  [Queue.js version 1.0.7](https://github.com/d3/d3-queue) - for loading the Json file dataset.
-  [dc.min.css](css/dc.min.css) - DC used for CSS.

##### Others - Icons/Fonts

- [Font Awesome 5.7.2](https://fontawesome.com/) - a icon and font toolkit, used for the icons in this project.
- [Google Font](https://fonts.googleapis.com/css?family=Montserrat:400,700) - for the font (Montserrat used).
    


### Dataset and Data Manipulation

The following datasets were used as the main source of information on this project:

[Our World in Data](https://ourworldindata.org/air-pollution) - I extracted CSV data files from the site and used Excel to manipulate them, then using the site [CSV2JSON](https://www.csvjson.com/csv2json) to convert the file into a JSON file. I simplified the data and removed a huged amount as there was a mountain of detail, which I felt wasn't needed for my particular site.

The plastic waste generation dataset within my Json in from is taking from a dataset from [2010](https://ourworldindata.org/grapher/plastic-waste-per-capita), which was the most recent data in this domain on the site. 
The death via air pollution 
However the Co2 Emissions levels, GDP, Population in the dataset are taken from [2017](https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions) as well as the [death rates from air pollution 2017](https://ourworldindata.org/grapher/death-rates-from-ambient-particulate-air-pollution).

*It's important to mention that the most recent plastic waste generation data was gathered in 2010, where as the rest of data on the site is from 2017. These figures have surely changed and it would be very interesting to update the site once the new data becomes available.*

## Testing

For testing, I used the 3 most popular web browsers, Google Chrome, Firefox and Safari as well as Microsoft Edge and Internet Explorer, using the devtools in each case. I tested throughout the project after any major adjustment to the project. I tested and evalued the functionality and responsiveness of each chart/js functionality on each browser. 

For this project, as per the requirements I put more emphasis of the desktop view and focused less on the grid for a mobile viewport. I used the Bootstrap grid system in a very simple fashion despite d3 restrictive nature with regard to the viewport. 

I had an issue with Microsoft Edge and the background color/opacity on my navbar/modal. It seemed not to function with when I used the background-color - rgb(10, 173, 13, 0.6). It wasn't too much of an issue but something to be aware of. 

*The site CSS/Bootstrap grid doesn't work on Internet Explorer.* However, according to the site [gs.statcounter](https://gs.statcounter.com/browser-market-share#monthly-201906-201906-bar), Google Chrome, Safari and Firefox account for **83.48%** of worldwide browser market share, with Edge and Internet Explorer accounting for **2.14%** and **2.29%** respectively so this wasn't too much of an issue in terms of user experience.

- *One interesting note I made was that on Microsoft Egde, my country selector list display was far more user friendly (in my opinion). Once a user clicked on it, the full list expanded and the view was quiet nice. This is a good example of a very small function that can be vastly altered for the better (in this case)*.

Also I would recommend against viewing in on a mobile device as it has been designed as a desktop site.

##### The tools I used for testing my code: 

[JS Hint](https://jshint.com/) to check my pollution.js code. I had 19 missed semi-colons, which were resolved.

A [HTML Validator](https://validator.w3.org/#validate_by_input) was used to check the HTML, I had 5 warnings and 10 errors, which mainly came from a span class which I replaced with a div.

A [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) was used to check the CSS for any major errors. 

##### Unresolved Bugs

An issue I have is that on the piecharts, once a nation has been selected, the other criteria that was presented already on the piechart became one jumbled line at the top of the piechart. 

### User Story Testing 

User Stories referenced earlier were:

- *"I'm interested in environmental issues and I would like to learn more".*

- *"I would like to learn more about pollution and it's impact on societies".* 

- *"I'm not at concerned with the enviroment but I'm a fan of geography and random data".*

- *"I'm from a European country and I want to know how my nation does in terms of GDP, waste (plastic) and Co2 emissions as well as mortality rates from air pollution".*

I have found, through my testing that all potential User Story criteria from above has been appeased and that all Users will all have the same experience, which will be the following step by step story here: 

1. Site upload 

2. Modal popup - using the opacity on the modal background, the main site information is camouflaged to allow the User to focus on the popup modal and the information within. 
Clear and simple content, 4 options -

    - close modal button.
    
    - hover over information icon to reveal tooltip with further tips and the meaning of the icon itself.
    
    - click quit/exit button in the top righthand corner of modal.
    
    - can click anywhere outside the modal to proceed to site.

3. Navbar functions on both desktop, which text being replaced on a smaller screen by Bootstrap "burger button". Navbar fixed which facilitates navigation up and down the page (avoiding constant scrolling). Navbar opaque to avoid User having page visibility totally reduced.  


4. Using "Select All" Selector. Chose a nation and watch the number (in number boxes and then charts) adjust automatically. Icon with tooltip that explains the select all selector function. 

5. Reset Filter fixed, which resets the charts back to the orginal full 28 state data. This button is visible through out the page placed in the bottom righthand corner. Has a tooltip upon mouse hover to give more information.

6. Chart by Chart, click on bars/sections to highlight them. Hover over nations to see title section popup with information, using the reset button as the user sees fit. The option to choose 1 or more nation simultaneous to show the responsiveness of the data and to add the playful, interactive aspect. 

7. Simple text on the page to beef up the charts information. Any links work with a target="_blank" function

8. Simple footer with a link to github profile.

9. Can click on the globe icon (top right to show informative modal popup) and can use Navbar to navigate the page.

In terms of my goals, with regards to the user story, I felt I've achieved a simple, user friendly and efficent site with understandable visualised data. I hope, along with the features that I would like to implement in the future, I can continue to adapt and improve this site. 


## Deployment

#### *This site is deployed on [Github](https://github.com/NeiloErnesto89/interactive-project2)*

This site is hosted using GitHub. I deployed my work directly from the master branch. I added, committed  and pushed my updates via the terminal regularly and then the deployed site automatically upon receiving the new commits to the master branch/source. As per requirements, the landing/main page of the site has been titled `index.html` for the deployment to function correctly on Github pages. 

If one wishes to run this page locally, you can clone (via HTTPS) the repository into a editor terminal using the following link:  `https://github.com/NeiloErnesto89/interactive-project2.git`. If you want to sever ties with GitHub then you need to enter `git remote rm origin` into your terminal.


Here is my Github [profile](https://github.com/NeiloErnesto89)

Here is the [repo](https://github.com/NeiloErnesto89/interactive-project2)

Here, once again, is my [deployed site](https://neiloernesto89.github.io/interactive-project2/)


## Credits, References and Links

*"Credit where credit's due"*

My entire dataset was taken from [Our World Data](https://ourworldindata.org/). I maniplated the data myself using Excel to keep the dataset simple.

[Numbeo](https://https://www.numbeo.com) - was a big source of inspiration. 

I found this [DC.JS How to Guide](https://dc-js.github.io/dc.js/docs/stock.html) really helpful, particularly for helping me figure out some of the more nuanced issues with the lables and titles on the charts.

My fellow coding students, in particular: 

[Tim Nelson](https://github.com/TravelTimN/ci-ifd-lead/blob/master/week3-d3-dc/d3-dc.md) - *And from his informative and helpful list I found further inspiration from more of my fellow students' briliant projects:* 

[Dave Laffan | Super Hero Dashboard](https://steview-d.github.io/superhero-dashboard/) - the use of a reset filter button was derived from this very aesthically pleasing site. 

[Matt Bush | London Dashboard](https://gitbush.github.io/london-boroughs/) - From this site I found the idea of a popup modal explaination to be really good, which inspired me to add my own simplifed version. There was also a brilliant use of GeoJson map on this site, which I really appreciate among many other things.

W3 Schools as always was a big help: 
[W3 Schools](https://www.w3schools.com/w3css/w3css_modal.asp)

I referred to this [dc.js examples resource](https://dc-js.github.io/dc.js/examples/) but found it at times the example sources were not so easy to replicate.

[Bootstrap 4 docs here](https://getbootstrap.com/docs/4.0/examples/cover/)

I found [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to be of some help with a guide on the flexbox and also for my [background image](https://css-tricks.com/perfect-full-page-background-image/) 


I also read the examples from the Sample Project section to help guide for the project and the Readme and incorporated some sections such as the Deployment section on my Readme - [here](https://courses.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/c75714c9636b4cf59120d60acbec6ffd/f851a16813f14b3aae7bd1e6560443cd/?activate_block_id=block-v1%3Acodeinstitute%2BFE%2B2017_T3%2Btype%40sequential%2Bblock%40f851a16813f14b3aae7bd1e6560443cd)

I also very often referred to [Stack Overflow](https://stackoverflow.com/) for a number of queries but never took any snippets directly as there were often conflicting advice or non applicable on the queries I had made but they were still helpful nonetheless. 

Slack and the Tutor were also very decent resources and helped me out whenever I was in need. 


### Content

I extracted/downloaded my files from the website [Our World Data](https://ourworldindata.org/air-pollution). They had some beautifully crafted informative charts and also openly allowed the downloading of their data, which was very robust and perfect for my project. 

I manipluated the charts as the information was so dense I had to extract only a small percentage of it. 


### Media

The wireframe images were made by me using [Balsamiq](https://balsamiq.com/).

### Acknowledgements

Thanks to my mentor, Maranatha, the Code Institute (especially the Tutor support) and of course, my family and girlfriend.

