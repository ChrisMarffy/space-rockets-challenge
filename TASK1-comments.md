# Thoughts on Task 1
Typically with a task like this I would use a timezone library like luxon (or moment) however the task brief outlined:

> treat this as if you fixed a bug in an app you work on together with a team, and the app is in production

And I would not introduce a dependency into a production app without some discussion with a team mate. 

Additionally, in this case, the SpaceX API spec is clear that the ``launch_date_local`` property is an ISO timestamp, and so I was confident in simply seperating the string based on lenght, into time vs offset.

For the tooltip I opted to simply use the option included in Chakra UI.