# Thoughts on Task 3

For task 3 I have made the following improvements:

- Converting the project to Typescript.
  This has been mostly completed - there are a few types I have left as 'any' but the main types, especially the values used from the SpaceX data are typed. Typing the project helped be find a bug in the originial code - in the LaunchPad component the 'status' was misspelled 'stats'.
- Added a simple dark mode using Chakra UI
