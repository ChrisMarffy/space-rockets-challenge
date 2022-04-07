# Thoughts on Task 3

For task 3 I have made the following improvements:

- Converting the project to Typescript.
  This has been mostly completed - there are a few types I have left as 'any' but the main types, especially the values used from the SpaceX data are typed. Typing the project helped be find a bug in the originial code - in the LaunchPad component the 'status' was misspelled 'stats'.
- Added a simple dark mode using Chakra UI
- Added react-leaflet to display a leaflet map that shows all launch sites on one map where you can click to naviagate to that launch site.

I had hoped to get 2 more items done for Task 3, but unfortunately I have run out of time, they are detailed below:

## Next Steps

- I was hoping to integrate a micro-detail view into the map, so that when you click on a pin you get an overview similar to the list view card, which you allows you to navigate further to the page.
- The front page is the least interesting design and I was hoping to replace the two current links with image tiles. and incorporate some animations.
