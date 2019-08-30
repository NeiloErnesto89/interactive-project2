# **Interactive Frontend Milestone Project II**

# Project Title:  *[EU Pollution Index ] (https://neiloernesto89.github.io/interactive-project2/)* - a site focused demonstrating visualed data on pollution in the EU.

One or two paragraphs providing an overview of your project.

Essentially, this part is your sales pitch.

## Design brief:

- My aim of this project was to provide a simple and user friendly visualisation of data for the user to compare and contrast countries within the European Union based on a small range of different criteria.
- 
- I wanted to build a frontend interactive site, based on a topic that I'm very interested in and naturally would allow me to utilise the skills I've acquired during the course. My aim was that the site would be ease to digest from the User's perspective, simple to navigate and also education on this topic. 
- 
- Using Co2 emission levels which is used as the main pollution indicator, I also took GDP, Plastic Waste Generation per country/capita, annual death rate caused by air pollution. I had previously used a similar index on the website [Numbeo](https://https://www.numbeo.com/pollution/comparison.jsp), where the user could guage different cities around the world against one another based on a number of factors, for example:  Ireland v  Germany on air pollution levels. Obviously due to nature and size of countries it's not as accurate as a city-based pollution index however I think the EU 28 nations are an interesting dataset due to the diverse cultures within the EU. 
 
 I felt this was a fun, interesting and very educational way to informing the user of the different ecological situations around the world. So the tool is not only enjoyable but has the added benefit of teaching the user an important fact.
 
## UX:
 

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

- Using the skills I had garnered from my last project, I felt I should continue along with a similar layout for the UX. My focus was on usability, with a simple and effcient design. 

- Like my first milestone project, the aim of the UX on this page is make it as simple, legible and efficent for the user as possible. Data visualisation is a great way to make a chunk of data more interesting so I wanted the UX to have an easy time digesting what is in fact a bit of a morbid subject. 
- 
My user type ideally will be curious and will follow the simple narrative of the site. As per requirments, it's a 1 page site and the data/graphs are presented in a loosely decending order. I placed what I felt to be the more pertient graphs towards to the top of the page with accompanying information. The aim being that the Users interest will be piqued by the facts presented and along with the simple ux will encourage the User to continue scrolling to learn more.  

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.
- 


This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.


- I used [Balsamiq](https://balsamiq.com/) to create simple wireframes mockups which allowed me to visually render my inital outline for the site. 
- 
- wireframes 

*Figure 1. Inital Wireframe*

![Wireframe 1 ](https://https://github.com/NeiloErnesto89/interactive-project2/blob/master/images/wireframes/Wireframe1_P2.jpg "Inital Wireframe")

## Features

### Existing Features:

The following features are presenting in order of appearance: 


- A Modal popup with a welcome message: Just a simple popup with to welcome visitor to the site.
- A tooltip icon (beside the close button) in the modal footer: This is to give the User a more information where needed. 
- EU in numbers box: To give the user quick, numerical data on the size of the population(s) in the EU and the total level of Co2 Emissions. The numbers adjust depending on the users selection(s). 
- A "Select all" selector: Underneath the numbers box, is a simple but powerful function with allows the user to chose a country which automatically updates all the charts to show the selected nation's data. 
- A fixed 'Reset Button': Placed in the bottom right of the screen, the user can simply click to refresh any of the charts statisitcs. It also has a simple tooltip to give further explaination.
- EU nations barchart to show the differing levels of Co2 emssions per state. 
- An EU emission pie chart follows to give another view of the statistics with a legened and cap (as not to be too much visually), which shows that well over 50% of the emissions in the EU come from just 5 nations.
- Following the piechart is a per capita emissions chart, which gave a more nuanced insighted into the pollution levels per capita with the 28 nations. 
- The (Death v GDP) scatterplot: I found this chart to be the most asthetically pleasing visualisation, demonstrating the loose correaltion between higher GDP and lower mortality rates due to air pollution and vise versa. This chart is perhaps the least interative chart but still can be adapted using the "Select all" selector. 
- Waste Generation v GDP: This chart is a line graph, guaging the levels of plastic waste generation per capita against the GDP levels. This chart has a brush function, which allows the user to select a range on the graph.
- Plastic Waste Generation Pie Chart: This pie chart shows the main nations and their citizens plastic waste generation levels per annum. 
- The '+-50kgs' Piechart split: This simple chart just shows the split of nations with citizens who produce either more or less than 50kgs of plastic waste per annum, along with the percentage of the total plastic waste level. 
- Row Chart: This chart renders the same data of the Plastic Waste Generation Pie Chart, but in another form which aids the visual experience for the user. 

### Features Left to Implement


- Probably the most enjoyable part of this project was the amount of ideas I had for adding more graphs, as well as more robust datasets and information to the site. The options are endless. I had to keep it realtively simple so as not to go overboard but I feel that among other features, the following would have been ideal:

- In particular, as I mentioned in the opening section of the readMe, a site that I really enjoy is [Numbeo](https://https://www.numbeo.com) and in particular their pollution comparison tool. I think it's a brilliant application that gives the user endlessly interesting and information. For example, the user could evalute the differences between Dublin (Ireland) and Lagos (Nigeria), comparing pollution levels, cost of living, crime etc. This would be something I would love to develop for my site and I will definitely be attempting once I've got some free time.  
 
-  Also, I felt that a GeoJson-Choropleth Map would be a really aesthetically rich, helpful and user friendly chart to add. 

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- The following languages were used on this project:
- 
    - Javascript
    - CSS
    - HTML
    - 

- The following libraries were used on this project:
    -  [JQuery](https://jquery.com) (The project uses **JQuery** to simplify DOM manipulation).
    -  Crossfilter
    -  Dc.min.js
    -  D3.min.js - 
    -  queue.min.js 
    
- The following dataset was used on this project:
    -  [Our World in Data](https://ourworldindata.org/air-pollution) I extracted Excel data from the site and simplied it as there was a mountain of detail which I felt wasn't needed for my particular site.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)
- 
I extracted/downloaded my files from the website - https://ourworldindata.org/air-pollution. They had some beautifully crafted informative charts and also openly allowed the downloading of their data, which was very robust and perfect for my project.  I manipluated the charts as the information was so dense I had to extract only a small percentage of it. 



### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
- 
# interactive-project2
# interactive-project2
